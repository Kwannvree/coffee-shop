'use client';

import Image from 'next/image';
import { App, Button, Card, Tag, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useI18n } from '@/components/Providers/PreferencesProvider';
import { formatPrice } from '@/lib/format';
import type { MenuItem } from '@/types';
import styles from './MenuCard.module.css';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { message } = App.useApp();
  const { t } = useI18n();
  const copy = t.menu.items[item.id];

  const addToOrder = () => {
    message.success(t.menu.added(copy.name));
  };

  return (
    <Card
      hoverable
      className={styles.card}
      cover={
        <div className={styles.media}>
          <Image
            src={item.image}
            alt={copy.imageAlt}
            fill
            sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 380px"
            className={styles.image}
          />
          <Tag bordered={false} className={styles.badge}>
            {t.menu.categories[item.category]}
          </Tag>
        </div>
      }
    >
      <div className={styles.titleRow}>
        <Typography.Title level={3} className={styles.name}>
          {copy.name}
        </Typography.Title>
        <span className={styles.price}>{formatPrice(item.price)}</span>
      </div>

      <Typography.Paragraph className={styles.description}>{copy.description}</Typography.Paragraph>

      <div className={styles.footer}>
        <span className={styles.notes}>{copy.notes}</span>
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={addToOrder}
          aria-label={t.menu.addToOrder(copy.name)}
          className={styles.addButton}
        />
      </div>
    </Card>
  );
}
