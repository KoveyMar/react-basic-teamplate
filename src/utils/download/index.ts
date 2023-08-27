import type { SysBlobResponse, SysRequestConfig } from '@/types';
import { generateID } from '..';

/**
 * @description a标签跳转下载
 * @param {string} fileName
 * @param {Blob} data
 * @returns {void}
 */
function Action(fileName: string, data: Blob): void {
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.style.display = 'none';
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

/**
 * @description 获取文件前缀名称
 * @param   {SysBlobResponse}   res API接口相应头
 * @param   {string}    fileName    文件名,默认值 download_file
 * @returns {[string, Blob]}    以数组的形式返回文件名, 二进制文件数据 [string, Blob]
 */
function pefixData(
    res: SysBlobResponse,
    fileName: string = 'download_file',
): [string, Blob] {
    const {
        headers: { 'content-disposition': filePath },
        data,
    } = res;
    const { 1: name } = filePath.split(';');
    return [name ? name.split('=')[1] : fileName, data];
}

/**
 * @description 下载文件
 * @date 2023-04-11
 * @param {any} data
 * @param {(data: any, params: any) => Promise<SysBlobResponse>} request
 * @param {string} fileName 文件名,默认值 download_file
 * @returns {Promise<void>}
 */
export async function downloadFile<D = any>(
    data: D,
    request: <T = SysBlobResponse>(data: D, params: any) => Promise<T>,
    fileName: string,
): Promise<void> {
    const responseType = {
        responseType: 'blob',
        headers: {
            'X-Blob': generateID(),
        },
    } as SysRequestConfig<D>;

    return request(data, responseType).then((res) => {
        const [_fileName, BlobData] = pefixData(res, fileName);
        Action(_fileName, BlobData);
    });
}
