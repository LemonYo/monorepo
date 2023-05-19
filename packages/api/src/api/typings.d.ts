declare namespace dipeakApi {
  type apiAlterVTablePostParams = {
    Authorization?: string;
  };

  type apiAuthCasCheckGetParams = {
    ticket?: string;
    Authorization?: string;
  };

  type apiAuthLoginPostParams = {
    Authorization?: string;
  };

  type apiClusterDeleteDeleteParams = {
    /** id */
    id: number;
    Authorization?: string;
  };

  type apiClusterGetGetParams = {
    /** id */
    id: number;
    Authorization?: string;
  };

  type apiClusterInfoGetParams = {
    /** cluster_id */
    cluster_id: number;
    Authorization?: string;
  };

  type apiClusterListGetParams = {
    /** limit */
    limit?: number;
    /** page */
    page?: number;
    Authorization?: string;
  };

  type apiClusterSavePostParams = {
    Authorization?: string;
  };

  type apiClusterV1JobmonitorListAllTasksGetParams = {
    jobID: string;
    Authorization: string;
  };

  type apiCreateDatasourcePostParams = {
    Authorization?: string;
  };

  type apiCreateDimAndFlatTablePostParams = {
    Authorization?: string;
  };

  type apiCreateMetricsPostParams = {
    Authorization?: string;
  };

  type apiCreatePTablePostParams = {
    Authorization?: string;
  };

  type apiCreateVirtualTablePostParams = {
    Authorization?: string;
  };

  type apiDbServiceDeleteDeleteParams = {
    /** id */
    id: number;
    Authorization?: string;
  };

  type apiDbServiceGetGetParams = {
    /** id */
    id: number;
    Authorization?: string;
  };

  type apiDbServiceListGetParams = {
    /** limit */
    limit?: number;
    /** page */
    page?: number;
    Authorization?: string;
  };

  type apiDbServiceSavePostParams = {
    Authorization?: string;
  };

  type apiDistoreV1MonitorInitTempClusterAddressGetParams = {
    /** 需要临时切换的集群地址。注：前端不可用 */
    tempClusterAddress?: string;
    Authorization?: string;
  };

  type apiDistoreV1MonitorListClusterAddressGetParams = {
    Authorization?: string;
  };

  type apiDistoreV1MonitorListClusterInfoPostParams = {
    Authorization?: string;
  };

  type apiDistoreV1MonitorListNodeInfoPostParams = {
    tableID?: string;
    Authorization?: string;
  };

  type apiDistoreV1MonitorListPartitionInfoPostParams = {
    tableID?: string;
    Authorization?: string;
  };

  type apiDistoreV1MonitorListSpaceInfoPostParams = {
    Authorization?: string;
  };

  type apiDistoreV1MonitorRevertClusterAddressGetParams = {
    Authorization?: string;
  };

  type apiDistoreV1MonitorSearchNodeInfoPostParams = {
    Authorization?: string;
  };

  type apiDistoreV1MonitorSearchPartitionInfoPostParams = {
    Authorization?: string;
  };

  type apiDownloadGetParams = {
    /** fileName */
    fileName: string;
    Authorization?: string;
  };

  type apiDropImporterPostParams = {
    Authorization?: string;
  };

  type apiDropPTablePostParams = {
    Authorization?: string;
  };

  type apiDropVTablePostParams = {
    Authorization?: string;
  };

  type apiEngineV1CatalogListGetParams = {
    current?: number;
    pageSize?: number;
    Authorization?: string;
  };

  type apiEngineV1DatabaseListGetParams = {
    current?: number;
    pageSize?: number;
    catalog: string;
    Authorization?: string;
  };

  type apiEngineV1EditorDeleteParams = {
    Authorization?: string;
  };

  type apiEngineV1EditorListGetParams = {
    Authorization?: string;
  };

  type apiEngineV1EditorPostParams = {
    Authorization?: string;
  };

  type apiEngineV1EditorPutParams = {
    Authorization?: string;
  };

  type apiEngineV1IndexListCatalogLineageGetParams = {
    /** 数据目录名称 */
    catalog?: string;
    Authorization?: string;
  };

  type apiEngineV1IndexListDatabaseLineageGetParams = {
    /** 数据目录名称 */
    catalog?: string;
    /** 数据库名称 */
    database?: string;
    Authorization?: string;
  };

  type apiEngineV1MetaGetExternalHiveTableGetParams = {
    /** hive metastore地址 */
    'hive.metastore.uris'?: string;
    /** 数据库名称 */
    database?: string;
    /** 表名称 */
    table?: string;
    Authorization?: string;
  };

  type apiEngineV1MetaListExternalHiveDatabasesGetParams = {
    /** metastore地址 */
    'hive.metastore.uris'?: string;
    Authorization?: string;
  };

  type apiEngineV1MetaListExternalHiveTablesGetParams = {
    /** hive metastore地址 */
    'hive.metastore.uris'?: string;
    /** 要查询的database */
    database?: string;
    Authorization?: string;
  };

  type apiEngineV1MetaUpdateVirtualTableLabelsPostParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsEnumItemsGetParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsGetParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsGetRecommendAtomicMetricsPostParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsGetRecommendMetricsWithCoorPostParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsInstanceGetParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsInstanceListPostParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsInstancePostParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsInstancePutParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsInstanceQueryPostParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsLineageGetParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsListPostParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsPostParams = {
    Authorization?: string;
  };

  type apiEngineV1MetricsPutParams = {
    Authorization?: string;
  };

  type apiEngineV1MvAccelerateGetParams = {
    /** 虚拟表名称 */
    virtualName: string;
    Authorization?: string;
  };

  type apiEngineV1MvDropDeleteParams = {
    /** 物化视图名称（内传） */
    mvName: string;
    /** 物化视图名称（外显） */
    displayName: string;
    Authorization?: string;
  };

  type apiEngineV1MvGetParams = {
    catalogName?: string;
    dbName?: string;
    mvName?: string;
    Authorization?: string;
  };

  type apiEngineV1MvJobListGetParams = {
    /** required is true */
    mvName?: string;
    /** the frequency of mv update  */
    updateFrequency?: string;
    /** the type of mv update */
    updateType?: string;
    Authorization?: string;
  };

  type apiEngineV1MvListGetParams = {
    catalogName?: string;
    dbName?: string;
    displayName?: string;
    scheduleType?: string;
    /** 枚举类型，包括：amv、mmv、tbl */
    viewType?: string;
    creator?: string;
    current?: number;
    pageSize?: number;
    Authorization?: string;
  };

  type apiEngineV1MvManualPostParams = {
    Authorization?: string;
  };

  type apiEngineV1MvRecordsGetParams = {
    /** 数据目录 */
    catalog: string;
    /** 数据库 */
    database: string;
    /** 物化名称 */
    mvName: string;
    Authorization?: string;
  };

  type apiEngineV1MvRerunPostParams = {
    Authorization?: string;
  };

  type apiEngineV1MvSearchGetParams = {
    catalogName?: string;
    dbName?: string;
    displayName?: string;
    creator?: string;
    viewType?: string;
    scheduleType?: string;
    current?: number;
    pageSize?: number;
    Authorization?: string;
  };

  type apiEngineV1PtableDeleteDeleteParams = {
    catalog?: string;
    database?: string;
    name?: string;
    Authorization?: string;
  };

  type apiEngineV1PtableDetailGetParams = {
    catalog?: string;
    database?: string;
    name?: string;
    Authorization?: string;
  };

  type apiEngineV1PtableListGetParams = {
    current?: string;
    pageSize?: string;
    catalog?: string;
    database?: string;
    Authorization?: string;
  };

  type apiEngineV1PtablePostParams = {
    Authorization?: string;
  };

  type apiEngineV1RecommendGetSampledDataGetParams = {
    catalogName?: string;
    dbName?: string;
    tableName?: string;
    Authorization?: string;
  };

  type apiEngineV1RecommendSamplingVTablesPostParams = {
    Authorization?: string;
  };

  type apiEngineV1RecommendWriteMetricsRecommendsPostParams = {
    catalogName?: string;
    dbName?: string;
    tableName?: string;
    Authorization?: string;
  };

  type apiEngineV1SmartQueryUploadSqlGetParams = {
    Authorization?: string;
  };

  type apiEngineV1SmartQueryUploadStateGetParams = {
    Authorization?: string;
  };

  type apiEngineV1SmartUploadFileListGetParams = {
    Authorization?: string;
  };

  type apiEngineV1SmartUploadSqlFilePostParams = {
    Authorization?: string;
  };

  type apiEngineV1SqlQueryGetParams = {
    queryId: string;
    Authorization?: string;
  };

  type apiEngineV1SqlQueryInfoGetParams = {
    queryId?: string;
    Authorization?: string;
  };

  type apiEngineV1SqlQueryPostParams = {
    Authorization?: string;
  };

  type apiEngineV1SupersetPortGetParams = {
    Authorization?: string;
  };

  type apiEngineV1SupersetSynAllMetricsGetParams = {
    Authorization?: string;
  };

  type apiEngineV1SupersetSynMetricsPostParams = {
    Authorization?: string;
  };

  type apiEngineV1VtableDeleteDeleteParams = {
    catalog?: string;
    database?: string;
    /** 默认true */
    cascadeDropLikeTable?: string;
    name?: string;
    Authorization?: string;
  };

  type apiEngineV1VtableDetailGetParams = {
    catalog?: string;
    database?: string;
    name: string;
    Authorization?: string;
  };

  type apiEngineV1VtableFuzzyGetParams = {
    name?: string;
    current?: number;
    pageSize?: number;
    Authorization?: string;
  };

  type apiEngineV1VtableGetTableQualityGetParams = {
    catalog: string;
    database: string;
    vtable: string;
    Authorization?: string;
  };

  type apiEngineV1VtableListGetParams = {
    current?: number;
    pageSize?: number;
    catalog: string;
    database: string;
    metricsVtable?: string;
    Authorization?: string;
  };

  type apiEngineV1VtablePostParams = {
    Authorization?: string;
  };

  type apiEngineV1VtablePreviewGetParams = {
    catalog: string;
    database: string;
    vtableName: string;
    limit?: number;
    Authorization?: string;
  };

  type apiEngineV1VtableQueryTableLineageGetParams = {
    catalog: string;
    database: string;
    vtableName: string;
    Authorization?: string;
  };

  type apiEngineV1VtableRecommendGetParams = {
    /** 数据集 */
    catalog: string;
    /** 数据库名称 */
    database: string;
    /** 虚拟表名称 */
    name: string;
    Authorization?: string;
  };

  type apiEngineV1VtableSearchGetParams = {
    current?: number;
    pageSize?: number;
    /** 数据集 */
    catalog?: string;
    /** 数据库 */
    database?: string;
    /** 表名，支持模糊搜索 */
    name?: string;
    /** 计算类型 */
    computeType?: string;
    /** 虚拟表类型 */
    virtualTableType?: string;
    /** 用户 */
    creator?: string;
    /** 热点 */
    hot?: number;
    /** 排序字段，这个要注意有嵌套的话，需要用"."连接 */
    sortField?: string;
    /** 是否逆序 */
    isReverseOrder?: string;
    Authorization?: string;
  };

  type apiGetCanLoadDataSourceListGetParams = {
    Authorization?: string;
  };

  type apiGetDatasourceDetailGetParams = {
    /** 物理表ID */
    id?: string;
    Authorization?: string;
  };

  type apiGetDataSourceTaskListGetParams = {
    Authorization?: string;
  };

  type apiGetEnumItemsGetParams = {
    Authorization?: string;
  };

  type apiGetFilterConditionGetParams = {
    Authorization?: string;
  };

  type apiGetJoinTypeGetParams = {
    Authorization?: string;
  };

  type apiGetMetricsGetParams = {
    Authorization?: string;
  };

  type apiGetMetricsSqlGetParams = {
    Authorization?: string;
  };

  type apiGetOnlineSqlPostParams = {
    Authorization?: string;
  };

  type apiGetPreviewDatasourceGetParams = {
    /** 表id */
    id: string;
    Authorization?: string;
  };

  type apiGetPrimitiveTypeGetParams = {
    Authorization?: string;
  };

  type apiGetRecommendMetricsPostParams = {
    Authorization?: string;
  };

  type apiGetTableTimeRangeGetParams = {
    Authorization?: string;
  };

  type apiGetVirtualTableDetailGetParams = {
    Authorization?: string;
  };

  type apiGetVirtualTableGetParams = {
    Authorization?: string;
  };

  type apiGetVirtualTableListGetParams = {
    Authorization?: string;
  };

  type apiGetVtableStatusGetParams = {
    Authorization?: string;
  };

  type apiHostDeleteDeleteParams = {
    /** id */
    id: number;
    Authorization?: string;
  };

  type apiHostGetGetParams = {
    /** id */
    id: number;
    Authorization?: string;
  };

  type apiHostListGetParams = {
    /** limit */
    limit?: number;
    /** page */
    page?: number;
    Authorization?: string;
  };

  type apiHostSavePostParams = {
    Authorization?: string;
  };

  type apiKvGetGetParams = {
    /** cluster_id */
    cluster_id: number;
    /** key */
    key: string;
    /** table_name */
    table_name: string;
    Authorization?: string;
  };

  type apiKvGetPutParams = {
    /** cluster_id */
    cluster_id: number;
    /** key */
    key: string;
    /** table_name */
    table_name: string;
    /** value */
    value: string;
    Authorization?: string;
  };

  type apiListAccumulativeWindowTypeGetParams = {
    Authorization?: string;
  };

  type apiListDatasourcesGetParams = {
    Authorization?: string;
  };

  type apiListMetricsBoardGetParams = {
    boardId?: number;
    Authorization?: string;
  };

  type apiListMetricsFunctionGetParams = {
    Authorization?: string;
  };

  type apiListMetricsMetaPostParams = {
    Authorization?: string;
  };

  type apiListMetricsTimeWindowTypeGetParams = {
    Authorization?: string;
  };

  type apiListPTablesPostParams = {
    Authorization?: string;
  };

  type apiListSlidingWindowTypeGetParams = {
    Authorization?: string;
  };

  type apiListVTableFromPTableGetParams = {
    Authorization?: string;
  };

  type apiListVTableGetParams = {
    Authorization?: string;
  };

  type apiLoadDatasourcePostParams = {
    Authorization?: string;
  };

  type apiLoadDataSourceURLPostParams = {
    Authorization?: string;
  };

  type apiMappingPostParams = {
    Authorization?: string;
  };

  type apiMetricsDataPostParams = {
    Authorization?: string;
  };

  type apiMetricsQueryPostParams = {
    Authorization?: string;
  };

  type apiMultiUploadPostParams = {
    Authorization?: string;
  };

  type apiPushOnlinePostParams = {
    Authorization?: string;
  };

  type apiQueryLineageGetParams = {
    projectId?: number;
    metricsId?: number;
    Authorization?: string;
  };

  type apiQueryMvStatusGetParams = {
    Authorization?: string;
  };

  type apiQueryOnlinePostParams = {
    Authorization?: string;
  };

  type apiRecomVTablePostParams = {
    Authorization?: string;
  };

  type apiSearchVtableGetParams = {
    Authorization?: string;
  };

  type apiSqlValidatePostParams = {
    Authorization?: string;
  };

  type apiSysResourcesGetParams = {
    Authorization?: string;
  };

  type apiTableCreatePostParams = {
    Authorization?: string;
  };

  type apiTableGetDeleteParams = {
    /** cluster_id */
    cluster_id: number;
    /** table_name */
    table_name: string;
    Authorization?: string;
  };

  type apiTableGetGetParams = {
    /** cluster_id */
    cluster_id: number;
    /** table_name */
    table_name: string;
    Authorization?: string;
  };

  type apiTableListGetParams = {
    /** cluster_id */
    cluster_id: number;
    Authorization?: string;
  };

  type apiUpdateMatrixPostParams = {
    Authorization?: string;
  };

  type apiUpdateMetricsPostParams = {
    Authorization?: string;
  };

  type apiUploadAndAnalyzeMvFilesPostParams = {
    Authorization?: string;
  };

  type apiUploadPostParams = {
    Authorization?: string;
  };

  type apiV1LoadPutParams = {
    catalog: string;
    database: string;
    vtable: string;
    file: string;
    Authorization?: string;
  };

  type apiV1MetaCatalogsGetParams = {
    Authorization?: string;
  };

  type apiV1MetaDatabasesGetParams = {
    Authorization?: string;
  };

  type apiV1MetaVritualTablesGetParams = {
    Authorization?: string;
  };

  type apiVTableCreateVirtualTablePostParams = {
    Authorization?: string;
  };

  type apiVTableV1CreateVirtualTableFromSqlPostParams = {
    Authorization?: string;
  };

  type apiWsReserveAskDBPostParams = {
    Authorization?: string;
  };

  type BaseQueryInfoVo = {
    queryId: string;
    stats: string;
    userName: string;
    role: string;
    executionTime: string;
    totalCpuTime: string;
    parallelismSize: string;
    liveness: string;
    memoryPeak: string;
  };

  type BaseVTableRequest = {
    catalogName: string;
    databaseName: string;
    virtualTableName: string;
  };

  type CatalogMetaVo = {
    id: number;
    name: string;
  };

  type CatalogVo = {
    databaseList: {
      virtualTableList?: {
        id?: number;
        catalogName?: string;
        databaseName?: string;
        name?: string;
        columnList?: {
          id?: number;
          name?: string;
          columnType?: string;
          comment?: string;
          columnPrecision?: number;
          columnScale?: number;
          not_allow_null?: boolean;
          displayList?: string[];
        }[];
        querySql?: string;
        displayList?: string[];
      }[];
      id?: number;
      catalogName?: string;
      name?: string;
    }[];
    id: number;
    name: string;
  };

  type ClusterEntity = {
    createTime?: string;
    id?: number;
    kvService: DbServerEntity[];
    metaService: DbServerEntity[];
    name: string;
    status?: 'INSTALL' | 'RUNNING' | 'STOP';
    updateTime?: string;
  };

  type ClusterInfo = {
    all?: ServerItem[];
    kvServer?: ServerItem[];
    leder?: HostAddr;
    metaServer?: ServerItem[];
  };

  type ColumnFilter = {
    columnName: string;
    /** ConditionTypeEnum的value值 */
    condition: string;
    value: string;
    /** and、 or 是ConditionConnectEnum的value */
    connect: string;
  };

  type ColumnMapParam = {
    calMethod: string;
  };

  type ColumnQualityVo = {
    catalogName: string;
    databaseName: string;
    tableName: string;
    columnName: string;
    columnType: string;
    rowNotNullCount: number;
    percentOfNull: number;
    nullCount: number;
    min: string;
    max: string;
    avg: string;
    timeStamp: string;
  };

  type ColumnVirtualVo = {
    /** 虚拟表id 虚拟表id */
    vid?: string;
    /** 虚拟表名称 虚拟表名称 */
    name?: string;
    /** 虚拟表类型 虚拟表类型 */
    primitiveType?: string;
    /** 虚拟表详情 虚拟表详情，虚拟表详情地址页 */
    virtualDetailUrl: string;
    maintainInfo?: {
      creator?: string;
      modifier?: string;
      comment?: string;
      modifyRevision?: number;
      createTime?: number;
      modifiedTime?: string;
    };
  };

  type ColumnVo = {
    name: string;
    columnType: string;
    columnPrecision?: number;
    columnScale?: number;
    notAllowNull?: boolean;
    comment?: string;
    auth?: boolean;
  };

  type ColumnVo1 = {
    /** 表ID 表ID */
    id?: string;
    /** 表名 表名 */
    name?: string;
    /** 类型 类型，INTEGER等 */
    primitiveType?: string;
    /** precision属性 precision属性 */
    columnPrecision?: number;
    /** scale属性 scale属性 */
    columnScale?: number;
    /** 是否允许null 是否允许null */
    notAllowNull?: boolean;
    /** state状态 state状态 */
    consumeState?: string;
    maintainInfo?: {
      creator?: string;
      modifier?: string;
      comment?: string;
      modifyRevision?: number;
      createTime?: number;
      modifiedTime?: string;
    };
  };

  type DatabaseMetaVo = {
    id: number;
    catalogName: string;
    name: string;
  };

  type DatabaseVo = {
    virtualTableList: {
      id?: number;
      catalogName?: string;
      databaseName?: string;
      name?: string;
      columnList?: {
        id?: number;
        name?: string;
        columnType?: string;
        comment?: string;
        columnPrecision?: number;
        columnScale?: number;
        not_allow_null?: boolean;
        displayList?: string[];
      }[];
      querySql?: string;
      displayList?: string[];
    }[];
    id: number;
    catalogName: string;
    name: string;
  };

  type Datasource = {
    /** 表ID 表ID */
    id?: string;
    /** 表名称 表名称 */
    name?: string;
    /** 建表语句 建表语句，输出创建表等SQL语句 */
    tableSql?: string;
    /** 表类型 表类型，1-事实表，2-纬度表，-1: 错误 */
    tableype?: number;
    /** 计算类型 计算类型，1-流计算，2-批量计算，-1:错误 */
    calculateType?: number;
    /** 主键 主键 */
    primaryKey?: string;
    /** 未知 */
    projectId?: number;
    /** 存储方式 存储方式，CVS */
    storageType?: string;
    /** 数据源地址 数据源地址 */
    sourceUrl?: string;
    /** 数据源类型 数据源类型 */
    sourceType: string;
    /** 业务域 业务域，废弃字段 */
    business?: string;
    /** 有效期 有效期 */
    effectiveRange?: number;
    /** 表类型 表类型 */
    tableType?: string;
    /** 更新频率 更新频率，year,week,day,hour,min,sec */
    frequency?: string;
    /** 上游完结时间 上游完结时间 */
    finTime?: number;
    /** 未使用 */
    timeColumn?: string;
    /** 格式化类型 格式化类型，CSV */
    ioFormat?: string;
    /** 数据负责人 数据负责人 */
    owner?: string;
    /** 最近更新时间 最近更新时间 */
    lastUpdateTime?: number;
    columnVOList?: {
      id?: string;
      name?: string;
      primitiveType?: string;
      columnPrecision?: number;
      columnScale?: number;
      notAllowNull?: boolean;
      consumeState?: string;
      maintainInfo: {
        creator?: string;
        modifier?: string;
        comment?: string;
        modifyRevision?: number;
        createTime?: number;
        modifiedTime?: string;
      };
    }[];
    maintainInfo?: {
      creator?: string;
      modifier?: string;
      comment?: string;
      modifyRevision?: number;
      createTime?: number;
      modifiedTime?: string;
    };
  };

  type DbServerEntity = {
    clusterId?: number;
    configFile: string;
    createTime?: string;
    dbPath?: string;
    host?: HostEntity;
    hostId: number;
    id?: number;
    logFileDir?: string;
    metaServerAddrs?: string;
    name: string;
    port?: number;
    raftDataPath?: string;
    serverOnCloud?: boolean;
    serverStatus?: 'INSTALL' | 'ONLINE' | 'OFFLINE';
    serviceType: 'META_SERVER' | 'KV_SERVER';
    updateTime?: string;
  };

  type DistributedByHashVo = {
    hashFunc: string;
    /** 列名列表 */
    keys: string[];
    bucketNum: number;
  };

  type Edge = {
    source: { table?: boolean; columnName?: string; name?: string };
    target: { table?: boolean; columnName?: string; name?: string };
  };

  type ExternalTable = {
    name: string;
    settings: { k1?: string; k2?: string };
    engine: string;
    columns: {
      column_name?: string;
      column_data_type?: string;
      nullable?: boolean;
      default?: string;
      comment?: string;
    }[];
  };

  type GetParams = {
    ip: string;
    name: string;
    pkgPath: string;
    port: number;
    sshPasswd?: string;
    sshUser: string;
    createTime?: string;
    id?: number;
    updateTime?: string;
    /** configFile */
    configFile?: string;
    Authorization?: string;
  };

  type HostAddr = {
    host?: string;
    port?: number;
  };

  type HostEntity = {
    createTime?: string;
    id?: number;
    ip: string;
    name: string;
    pkgPath: string;
    port: number;
    sshPasswd?: string;
    sshUser: string;
    updateTime?: string;
  };

  type IndexMinMaxVo = {
    name: string;
    columns: string[];
    granularity: string;
  };

  type IndexNgramBfV1Vo = {
    name: string;
    columns: string[];
    granularity: string;
    n: string;
    sizeOfBloomFilerInBytes: string;
    numberOfHashFunctions: string;
    randomSeed: string;
  };

  type IndexSetVo = {
    name: string;
    columns: string[];
    granularity?: string;
    maxRows?: number;
  };

  type IndexTokenBfV1Vo = {
    name: string;
    columns: string[];
    granularity: string;
    sizeOfBloomFilerInBytes: string;
    numberOfHashFunctions: string;
    randomSeed: string;
  };

  type InstanceWindowVo = {
    /** 累计、滑动、滚动 */
    windowType: string;
    /** 年月日时分秒 */
    windowGranularity: string;
    windowSize: number;
    /** 年月日时分秒 */
    updateGranularity: string;
    updateGranularityValue: number;
  };

  type IPageClusterEntity = {
    current?: number;
    pages?: number;
    records?: ClusterEntity[];
    size?: number;
    total?: number;
  };

  type IPageDbServerEntity = {
    current?: number;
    pages?: number;
    records?: DbServerEntity[];
    size?: number;
    total?: number;
  };

  type IPageHostEntity = {
    current?: number;
    pages?: number;
    records?: HostEntity[];
    size?: number;
    total?: number;
  };

  type JoinKey = {
    sourceKey: string;
    targetKey: string;
    condition: string;
  };

  type JoinLink = {
    sourceTableName: string;
    targetTableName: string;
    joinType: string;
    joinKeys: { sourceKey?: string; targetKey?: string; condition?: string }[];
  };

  type Lineage = {
    edges: {
      source: { table?: boolean; columnName?: string; name?: string };
      target: { table?: boolean; columnName?: string; name?: string };
    }[];
    nodes: { table?: boolean; metricsType?: string; name?: string; columnExpression?: string }[];
  };

  type MaintainInfoVo = {
    /** 创建人 创建人 */
    creator?: string;
    /** 修改人 修改人 */
    modifier?: string;
    /** 修改备注 修改备注 */
    comment?: string;
    /** 编辑版本 编辑版本 */
    modifyRevision?: number;
    /** 创建时间 创建时间 */
    createTime: number;
    /** 修改时间 修改时间 */
    modifiedTime?: string;
  };

  type MappingVTableParam = {
    projectId: number;
    virtualTableId: number;
    isMasterVirtualTable: boolean;
  };

  type MaterializedViewVo = {
    name: string;
    /** list<String> */
    columList: string[];
    /** list<String> */
    primaryKey: string[];
  };

  type metaGetPTablePostParams = {
    Authorization?: string;
  };

  type metaGetVTablePostParams = {
    Authorization?: string;
  };

  type metaListPTablesGetParams = {
    Authorization?: string;
  };

  type MetricsBoardResult = {
    /** 指标id */
    metricsId: number;
    /** 指标看板关联的sql */
    boardSql: string;
    /** ine：折线图，column: 柱状图，pie：饼图，table:表 */
    type: string;
    data: Record<string, any>[];
    /** X轴 */
    xField: string;
    yField: string;
    /** 拆分字段，在分组柱状图下同 groupField、colorField */
    seriesField: string;
    tooltip: { title?: string };
    xAxis: string;
    yAxis: string;
  };

  type MetricsColumnVo = {
    id: string;
    name: string;
  };

  type MetricsInstanceMetaVo = {
    vtableMeta: { catalogName?: string; databaseName?: string; virtualTableName?: string };
    metricsId: number;
    /** 指标名 */
    metricsName?: string;
    /** 指标类型 */
    metricsType: string;
    /** 关联维度 */
    dimensions: string[];
    /** 指标实例名 */
    name: string;
    instanceWindowVO: {
      windowType?: string;
      windowGranularity?: string;
      windowSize?: number;
      updateGranularity?: string;
      updateGranularityValue?: number;
    };
    /** 指标实例含义 */
    meaning: string;
    creator?: string;
  };

  type MetricsInstanceVo = {
    id: number;
    userId: number;
    createTime: string;
    sql: string;
    vtableMeta: { catalogName?: string; databaseName?: string; virtualTableName?: string };
    metricsId: number;
    /** 指标名 */
    metricsName?: string;
    /** 指标类型 */
    metricsType: string;
    /** 关联维度 */
    dimensions: string[];
    /** 指标实例名 */
    name: string;
    instanceWindowVO: {
      windowType?: string;
      windowGranularity?: string;
      windowSize?: number;
      updateGranularity?: string;
      updateGranularityValue?: number;
    };
    /** 指标实例含义 */
    meaning: string;
    creator?: string;
  };

  type MetricsQueryResult = {
    columnMetas: { columnName?: string; key?: string }[];
    data: Record<string, any>[];
  };

  type MetricsSqlFilter = {
    columnName: string;
    condition: string;
    value: string;
  };

  type MetricsSqlOrder = {
    columnName: string;
    asc: boolean;
  };

  type MetricsSqlParam = {
    projectId: number;
    metricsId: number;
    vtableId: string;
    columnNames: string[];
    partition: string;
    primaryKeys: string[];
    startTime: number;
    endTime?: number;
    filters: { columnName?: string; condition?: string; value?: string }[];
    orderColumns: { columnName?: string; asc?: boolean };
    timeIntervalInSeconds: number;
    rowCount: number;
  };

  type MetricsVo = {
    vtableMeta: { catalogName?: string; databaseName?: string; virtualTableName?: string };
    /** 指标名称 */
    name: string;
    /** 指标含义 */
    meaning?: string;
    /** 指标类型 */
    metricsType: string;
    /** 字段 */
    referenceColumn: MetricsColumnVo[];
    /** 关联维度-包含 ID */
    dimensionList: MetricsColumnVo[];
    /** 关联维度-多选vtable */
    dimensions: string[];
    /** 指标算子表达式 */
    columnExpression?: string;
    /** 业务系统 */
    businessType: string;
    label?: string;
    creator?: string;
    /** 展示指标的时候的创建时间 */
    createTime?: string;
  };

  type MetricsVo1 = {
    id?: string;
    name?: string;
    displayName?: string;
    projectId?: number;
    metricsType?: string;
    metricsFunction?: string;
    referenceTableId?: number;
    referenceTableName?: string;
    frequency?: string;
    business?: string;
    referenceColumnList?: {
      id?: string;
      name?: string;
      primitiveType?: string;
      columnPrecision?: number;
      columnScale?: number;
      notAllowNull?: boolean;
      consumeState?: string;
      maintainInfo: {
        creator?: string;
        modifier?: string;
        comment?: string;
        modifyRevision?: number;
        createTime?: number;
        modifiedTime?: string;
      };
    }[];
    dimensionList?: {
      id?: string;
      name?: string;
      primitiveType?: string;
      columnPrecision?: number;
      columnScale?: number;
      notAllowNull?: boolean;
      consumeState?: string;
      maintainInfo: {
        creator?: string;
        modifier?: string;
        comment?: string;
        modifyRevision?: number;
        createTime?: number;
        modifiedTime?: string;
      };
    }[];
    maintainInfo?: {
      creator?: string;
      modifier?: string;
      comment?: string;
      modifyRevision?: number;
      createTime?: number;
      modifiedTime?: string;
    };
    timeWindowType: string;
    slidingWindowType: string;
    slidingWindowValue: string;
    accumulativeWindowType: string;
  };

  type MirrorTableConfigVo = {
    /** 使用模式 使用模式 */
    usageMode?: string;
    /** 排序列 排序列 */
    sortColumn?: string;
    /** corn表达式 corn表达式 */
    corn?: string;
    /** 是否立即导数 是否立即导数 */
    importImmediately?: boolean;
    /** 分布式哈希表的子集 分布式哈希表的子集 */
    buckets?: number;
    /** 分区列格式 分区列格式 */
    partitionFormat?: string;
    /** 时区 时区 */
    timeZone?: string;
    /** 分片键 分片键 */
    distributedKeys?: string[];
  };

  type ModificationVo = {
    creator?: string;
    gmtCreated?: string;
    modifier?: string;
    gmtModified?: string;
  };

  type Node = {
    /** 标识是指标还是表 */
    table: boolean;
    metricsType: string;
    name: string;
    columnExpression: string;
  };

  type OnlineMetricsParam = {
    /** 指标名字不是别名 */
    metricsName: string;
    partition: string;
    columnNames: string[];
  };

  type PhysicsTableVo = {
    id?: string;
    catalogName: string;
    databaseName: string;
    name: string;
    tableEngine: string;
    /** managedTable/extenalTable */
    tableType: string;
    comment?: string;
    primaryKeys?: string[];
    partitionKeys?: string[];
    clusteringKeys?: string[];
    distributedByHash?: DistributedByHashVo;
    columns: ColumnVo[];
    indexMinMaxList?: IndexMinMaxVo[];
    indexSetList?: IndexSetVo[];
    indexNgramBfV1List?: IndexNgramBfV1Vo[];
    indexTokenBfV1List?: IndexTokenBfV1Vo[];
    modification?: ModificationVo;
    properties?: Record<string, any>;
  };

  type ProjectVo = {
    id: string;
    name: string;
    maintainInfo: {
      creator?: string;
      modifier?: string;
      comment?: string;
      modifyRevision?: number;
      createTime?: number;
      modifiedTime?: string;
    };
  };

  type QueryPlanInfoVo = {
    executePlan: string[];
  };

  type QueryProcessInfoVo = {
    /** 提交时间 */
    submissionTime: string;
    /** 分析耗时 */
    analysisTime: string;
    /** 调度耗时 */
    scheduleTime: string;
    /** 执行耗时 */
    executionTime: string;
    /** 失败时间点 */
    failTime: string;
    /** 成功时间点 */
    successTime: string;
  };

  type QuerySqlResultParam = {
    queryIdList: number[];
  };

  type ResponseEntity = {
    code: number;
    data: Record<string, any>;
    msg: string;
  };

  type ResponseEntityBoolean = {
    code?: number;
    data?: boolean;
    msg?: string;
  };

  type ResponseEntityCatalogMetaVo = {
    code?: number;
    data?: CatalogMetaVo;
    msg?: string;
  };

  type ResponseEntityClusterEntity = {
    code?: number;
    data?: ClusterEntity;
    msg?: string;
  };

  type ResponseEntityClusterInfo = {
    code?: number;
    data?: ClusterInfo;
    msg?: string;
  };

  type ResponseEntityDbServerEntity = {
    code?: number;
    data?: DbServerEntity;
    msg?: string;
  };

  type ResponseEntityHostEntity = {
    code?: number;
    data?: HostEntity;
    msg?: string;
  };

  type ResponseEntityListTableVo = {
    code?: number;
    data?: TableVo[];
    msg?: string;
  };

  type ResponseEntityString = {
    code?: number;
    data?: string;
    msg?: string;
  };

  type ResponseEntityTableVo = {
    code?: number;
    data?: TableVo;
    msg?: string;
  };

  type ServerItem = {
    allParts?: Record<string, any>;
    gitInfoSha?: string;
    hostAddr?: HostAddr;
    leaderParts?: Record<string, any>;
    serviceType?: string;
    status?: 'INSTALL' | 'ONLINE' | 'OFFLINE';
    version?: string;
    zoneName?: string;
  };

  type SqlQueryParam = {
    windowId?: number;
    sqlContent: string;
  };

  type SqlQueryStatusBo = {
    /** 1代表运行中，2代表运行成功，3代表运行失败 */
    code: number;
    message: string;
  };

  type SqlQueryVo = {
    sql: string;
    queryId: number;
    status: { code?: number; message?: string };
    executionTime: number;
    rows: number;
    columnName: string[];
    data: Record<string, any>;
  };

  type SqlQueryVo1 = {
    sql: string;
    queryId: string;
    status: { code?: number; message?: string };
    startTime: string;
    endTime: string;
    executionTime: string;
    rows: number;
    columnName: string[];
    data: Record<string, any>[];
  };

  type SqlWindowVo = {
    userId: number;
    windowId: number;
    windowName: string;
    sqlContent: string;
  };

  type TableAlter = {
    addColumns: {
      calMethod?: string;
      column?: {
        id?: string;
        name?: string;
        primitiveType?: string;
        columnPrecision?: number;
        columnScale?: number;
        notAllowNull?: boolean;
        consumeState?: string;
        maintainInfo: {
          creator?: string;
          modifier?: string;
          comment?: string;
          modifyRevision?: number;
          createTime?: number;
          modifiedTime?: string;
        };
      };
    }[];
    delColumns: {
      id?: string;
      name?: string;
      primitiveType?: string;
      columnPrecision?: number;
      columnScale?: number;
      notAllowNull?: boolean;
      consumeState?: string;
      maintainInfo: {
        creator?: string;
        modifier?: string;
        comment?: string;
        modifyRevision?: number;
        createTime?: number;
        modifiedTime?: string;
      };
    }[];
    modColumns: {
      id?: string;
      name?: string;
      primitiveType?: string;
      columnPrecision?: number;
      columnScale?: number;
      notAllowNull?: boolean;
      consumeState?: string;
      maintainInfo: {
        creator?: string;
        modifier?: string;
        comment?: string;
        modifyRevision?: number;
        createTime?: number;
        modifiedTime?: string;
      };
    }[];
  };

  type TableEntity = {
    charsetName?: string;
    clusterId: number;
    collateName?: string;
    comment?: string;
    createTime?: string;
    id?: number;
    name: string;
    /** 分区数 */
    partitionNum: number;
    /** 副本数 */
    replicaFactor: number;
    updateTime?: string;
    zoneNames?: string;
  };

  type TableNode = {
    table: string;
    type: string;
  };

  type TableQualityDetailVo = {
    catalogName: string;
    databaseName: string;
    name: string;
    tableType: string;
    dataRowNumber: number;
    percentOfDuplicate: number;
    dataSize: number;
    duplicateRowNumber: number;
    columnQualityVOList: ColumnQualityVo[];
    timeStamp: string;
  };

  type TableQualityVo = {
    tableQualityDetail: TableQualityDetailVo;
    sourceTables: UpstreamSourceDataVo[];
  };

  type TableVo = {
    id?: string;
    name: string;
    query: string;
    columnVOList?: ColumnVo1[];
    referenceTableIds?: number[];
    /** maintainVo maintainVo */
    maintainInfo: {
      creator?: string;
      modifier?: string;
      comment?: string;
      modifyRevision?: number;
      createTime?: number;
      modifiedTime?: string;
    };
  };

  type updateDataSourceGetParams = {
    Authorization?: string;
  };

  type UpstreamSourceDataVo = {
    rowNumber: number;
    absoluteOfDataSize: number;
    duplicateRowNumber: number;
    percentOfDuplicate: number;
    lastUpdateTime: string;
    lastUpdateDataSize: number;
    tableName: string;
    tableType: string;
  };

  type UserAuthenticateResult = {
    userName: string;
    token: string;
    projectId: number;
  };

  type UserLoginParam = {
    userName: string;
    password: string;
  };

  type VirtualTableColumnVo = {
    id?: number;
    name: string;
    columnType: string;
    comment?: string;
    columnPrecision?: number;
    columnScale?: number;
    not_allow_null?: boolean;
    displayList?: string[];
  };

  type VirtualTableVo = {
    name: string;
    id?: number;
    /** 数据目录 数据目录 */
    catalogName: string;
    /** 数据库 数据库 */
    databaseName: string;
    query?: string;
    /** 虚拟表类型 虚拟表类型，贴源 (like)、业务 (as) */
    virtualTableType?: string;
    /** 计算类型 计算类型，流 (stream)、批 (batch)、流批一体 (streamWithBatch) */
    computeType?: string;
    /** 热度 热度 */
    hot?: number;
    /** 哪个物理表的贴源表 哪个物理表的贴源表，default_catalog.default_db.table1 */
    like?: string;
    settings?: { k1?: string; k2?: string };
    /** 时间列 时间列 */
    timeColumn?: string;
    columns: {
      id?: number;
      name?: string;
      columnType?: string;
      comment?: string;
      columnPrecision?: number;
      columnScale?: number;
      not_allow_null?: boolean;
      displayList?: string[];
    }[];
    displayList?: string[];
    /** 标签 标签 */
    tag?: string;
    /** 用户 用户 */
    user?: string;
    modification?: ModificationVo;
  };

  type VirtualTableVo1 = {
    id: number;
    catalogName: string;
    databaseName: string;
    name: string;
    columnList: {
      id?: number;
      name?: string;
      columnType?: string;
      comment?: string;
      columnPrecision?: number;
      columnScale?: number;
      not_allow_null?: boolean;
      displayList?: string[];
    }[];
    querySql: string;
    displayList: string[];
  };

  type VQuery = {
    name?: string;
    query?: string;
    maintainInfo?: {
      creator?: string;
      modifier?: string;
      comment?: string;
      modifyRevision?: number;
      createTime?: number;
      modifiedTime?: string;
    };
  };

  type VtableMetaVo = {
    /** 目录 */
    catalogName: string;
    /** 数据库 */
    databaseName: string;
    /** 虚拟表 */
    virtualTableName: string;
  };

  type VtableQueryInfoVo = {
    catalogName: string;
    databaseName: string;
    vtableName: string;
    rowNumber: string;
    dataSize: string;
    authority: string;
  };

  type VTableTreeNode = {
    projectId: number;
    tableName: string;
    children: VTableTreeNode[];
    childLinks: {
      sourceTableName?: string;
      targetTableName?: string;
      joinType?: string;
      joinKeys?: { sourceKey?: string; targetKey?: string; condition?: string }[];
    }[];
    filter: string;
  };

  type VTableVo = {
    id?: string;
    name?: string;
    maintainInfo?: {
      creator?: string;
      modifier?: string;
      comment?: string;
      modifyRevision?: number;
      createTime?: number;
      modifiedTime?: string;
    };
    /** 表字段 */
    columnList?: {
      id?: string;
      name?: string;
      primitiveType?: string;
      columnPrecision?: number;
      columnScale?: number;
      notAllowNull?: boolean;
      consumeState?: string;
      maintainInfo: {
        creator?: string;
        modifier?: string;
        comment?: string;
        modifyRevision?: number;
        createTime?: number;
        modifiedTime?: string;
      };
    }[];
    virtualQueries?: {
      name?: string;
      query?: string;
      maintainInfo: {
        creator?: string;
        modifier?: string;
        comment?: string;
        modifyRevision?: number;
        createTime?: number;
        modifiedTime?: string;
      };
    };
    business?: string;
    consumeState?: string;
    projectId: string;
  };

  type ZhiBiaoVo = {
    id: number;
    userId: number;
    /** 指标名称 */
    name: string;
    column?: string;
    /** 算子 */
    function?: string;
    hot: number;
    /** 前端用来展示的指标sql */
    displaySql: string;
    /** 后台用于查询血缘的sql */
    lineageSQL: string;
    vtableMeta: { catalogName?: string; databaseName?: string; virtualTableName?: string };
    /** 指标含义 */
    meaning?: string;
    /** 指标类型 */
    metricsType: string;
    /** 字段 */
    referenceColumn: MetricsColumnVo[];
    /** 关联维度-包含 ID */
    dimensionList: MetricsColumnVo[];
    /** 关联维度-多选vtable */
    dimensions: string[];
    /** 指标算子表达式 */
    columnExpression?: string;
    /** 业务系统 */
    businessType: string;
    label?: string;
    creator?: string;
    /** 展示指标的时候的创建时间 */
    createTime?: string;
  };
}
