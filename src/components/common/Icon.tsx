'use client';

import {
  ArrowRightOutlined,
  ClockCircleOutlined,
  CoffeeOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  HomeOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TrophyOutlined,
  YoutubeFilled,
} from '@ant-design/icons';
import type { IconName } from '@/types';

/**
 * Lets Server Components render Ant Design icons by name.
 * Component references can't cross the server/client boundary, but strings can.
 */
const icons = {
  coffee: CoffeeOutlined,
  trophy: TrophyOutlined,
  home: HomeOutlined,
  environment: EnvironmentOutlined,
  clock: ClockCircleOutlined,
  phone: PhoneOutlined,
  mail: MailOutlined,
  instagram: InstagramOutlined,
  facebook: FacebookFilled,
  youtube: YoutubeFilled,
  arrowRight: ArrowRightOutlined,
} satisfies Record<IconName, typeof CoffeeOutlined>;

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  const Component = icons[name];
  return <Component className={className} aria-hidden="true" />;
}
