import { createElement } from 'rax';

import Menu from '../../miniapp-native/vant/dropdown-menu/index';
import Item from '../../miniapp-native/vant/dropdown-item/index';

export default function Home() {
  const options = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ];
  const value = 0;
  return (
    <view>
        <text>aahasjk</text>
      <Menu>
        <Item value={value} options={options} />
      </Menu>
    </view>
  );
}
