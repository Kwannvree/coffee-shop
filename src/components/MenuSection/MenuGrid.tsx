'use client';

import { useState } from 'react';
import { Button, Col, Row } from 'antd';
import { ArrowRightOutlined, UpOutlined } from '@ant-design/icons';
import Reveal from '@/components/common/Reveal';
import { useI18n } from '@/components/Providers/PreferencesProvider';
import type { MenuItem } from '@/types';
import MenuCard from './MenuCard';
import styles from './MenuSection.module.css';

interface MenuGridProps {
  items: MenuItem[];
}

export default function MenuGrid({ items }: MenuGridProps) {
  const { t } = useI18n();
  const [showFullMenu, setShowFullMenu] = useState(false);
  const visibleItems = showFullMenu ? items : items.filter((item) => item.signature);

  const toggleMenu = () => {
    if (showFullMenu) {
      document.getElementById('menu')?.scrollIntoView({ block: 'start' });
    }
    setShowFullMenu((value) => !value);
  };

  return (
    <>
      <Row id="menu-grid" gutter={[28, 28]} aria-live="polite">
        {visibleItems.map((item, index) => (
          <Col key={item.id} xs={24} sm={12} lg={8}>
            <Reveal delay={(index % 3) * 90} className="full-height">
              <MenuCard item={item} />
            </Reveal>
          </Col>
        ))}
      </Row>

      <div className={styles.actions}>
        <Button
          size="large"
          onClick={toggleMenu}
          aria-expanded={showFullMenu}
          aria-controls="menu-grid"
          icon={showFullMenu ? <UpOutlined /> : <ArrowRightOutlined />}
          iconPosition="end"
        >
          {showFullMenu ? t.menu.showSignature : t.menu.viewFull}
        </Button>
      </div>
    </>
  );
}
