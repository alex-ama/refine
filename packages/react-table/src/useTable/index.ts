import { useEffect } from "react";
import {
    BaseRecord,
    CrudFilters,
    CrudOperators,
    HttpError,
    useTable as useTableCore,
    useTableProps as useTablePropsCore,
} from "@pankod/refine-core";
import { useTable as useTableRT, PluginHook, TableOptions } from "react-table";

export type UseTableReturnType = ReturnType<typeof useTableRT> & {
    useTableCore: ReturnType<typeof useTableCore>;
};

export type UseTableProps<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
> = {
    refineTableProps?: useTablePropsCore<TData, TError>;
} & TableOptions<{}>;

export const useTable = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
>(
    { refineTableProps, ...rest }: UseTableProps<TData, TError /* D */>,
    ...plugins: Array<PluginHook<{}>>
): UseTableReturnType => {
    const useTableResult = useTableCore<TData, TError>({
        ...refineTableProps,
    });

    const {
        tableQueryResult,
        current,
        setCurrent,
        pageSize: pageSizeCore,
        setPageSize: setPageSizeCore,
        sorter,
        setSorter,
        filters: filtersCore,
        setFilters,
    } = useTableResult;

    const { data } = tableQueryResult;

    const reactTableResult = useTableRT(
        {
            data: data?.data || [],
            initialState: {
                pageIndex: current - 1,
                pageSize: pageSizeCore,
                sortBy: sorter.map((sorting) => ({
                    id: sorting.field,
                    desc: sorting.order === "desc",
                })),
                filters: filtersCore.map((filter) => ({
                    id: filter.field,
                    value: filter.value,
                })),
            },
            pageCount: Math.ceil((data?.total || 0) / pageSizeCore),
            manualPagination: true,
            manualSortBy: true,
            manualFilters: true,
            ...rest,
        },
        ...plugins,
    );

    const { pageIndex, pageSize, sortBy, filters } = reactTableResult.state;

    useEffect(() => {
        setCurrent(pageIndex + 1);
    }, [pageIndex]);

    useEffect(() => {
        setPageSizeCore(pageSize);
    }, [pageSize]);

    useEffect(() => {
        setSorter(
            sortBy.map((sorting) => ({
                field: sorting.id,
                order: sorting.desc ? "desc" : "asc",
            })),
        );
    }, [sortBy]);

    useEffect(() => {
        const crudFilters: CrudFilters = [];

        filters.map((filter) => {
            const operator = reactTableResult.columns.find(
                (c) => c.id === filter.id,
            )?.filter as CrudOperators;

            crudFilters.push({
                field: filter.id,
                value: filter.value,
                operator:
                    operator ?? (Array.isArray(filter.value) ? "in" : "eq"),
            });
        });

        setFilters(crudFilters);
    }, [filters]);

    return {
        ...reactTableResult,
        useTableCore: useTableResult,
    };
};
