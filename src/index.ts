import am1 from '@mmstudio/am000001';
import am2 from '@mmstudio/am000002';

/**
 * 初始化网络连接
 */
export default function init(mm: am1, base_url: string) {
	am2(mm, 'host', base_url);
}
