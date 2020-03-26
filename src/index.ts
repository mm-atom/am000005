import am2 from '@mmstudio/am000002';

/**
 * 初始化网络连接
 */
export default function init(base_url: string) {
	am2('host', base_url);
}
