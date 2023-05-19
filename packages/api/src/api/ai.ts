// @ts-ignore
/* eslint-disable */
import axios from 'axios';

/** 更新虚拟表热力值 POST /api/engine/v1/meta/updateVirtualTableLabels */
export async function apiEngineV1MetaUpdateVirtualTableLabelsPost(
  body: {
    /** 数据目录 */
    catalog: string;
    /** 数据库 */
    database: string;
    /** 表名 */
    tableName: string;
    labels: { CONTEXT_KEY_HOT?: string };
  },
  options?: { [key: string]: any },
) {
  return axios<{
    code: number;
    name: any;
    msg: any;
    retriable: boolean;
    data: number;
    error: any;
  }>('/api/engine/v1/meta/updateVirtualTableLabels', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
