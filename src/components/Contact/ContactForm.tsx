'use client';

import { useEffect, useState } from 'react';
import { App, Button, Col, Form, Input, Row } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useI18n } from '@/components/Providers/PreferencesProvider';

interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const PHONE_PATTERN = /^[+()\d\s-]{7,20}$/;

export default function ContactForm() {
  const [form] = Form.useForm<ContactFormValues>();
  const [submitting, setSubmitting] = useState(false);
  const { message } = App.useApp();
  const { t, locale } = useI18n();
  const copy = t.contact.form;

  // Re-run validation so any visible error messages switch language too.
  useEffect(() => {
    const touched = form
      .getFieldsError()
      .filter((field) => field.errors.length > 0)
      .map((field) => field.name);
    if (touched.length > 0) void form.validateFields(touched).catch(() => undefined);
  }, [locale, form]);

  const handleFinish = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      // Replace with a real request (e.g. a Route Handler or form service).
      await new Promise((resolve) => setTimeout(resolve, 900));
      const firstName = values.name.trim().split(/\s+/)[0] ?? values.name;
      message.success(copy.success(firstName));
      form.resetFields();
    } catch {
      message.error(copy.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form<ContactFormValues>
      form={form}
      layout="vertical"
      requiredMark={false}
      onFinish={handleFinish}
      size="large"
      validateTrigger="onBlur"
    >
      <Row gutter={20}>
        <Col xs={24} sm={12}>
          <Form.Item
            label={copy.name}
            name="name"
            rules={[
              { required: true, whitespace: true, message: copy.nameRequired },
              { min: 2, message: copy.nameMin },
            ]}
          >
            <Input placeholder={copy.namePlaceholder} autoComplete="name" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            label={copy.email}
            name="email"
            rules={[
              { required: true, message: copy.emailRequired },
              { type: 'email', message: copy.emailInvalid },
            ]}
          >
            <Input placeholder={copy.emailPlaceholder} autoComplete="email" inputMode="email" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label={copy.phone}
        name="phone"
        rules={[{ pattern: PHONE_PATTERN, message: copy.phoneInvalid }]}
      >
        <Input placeholder={copy.phonePlaceholder} autoComplete="tel" inputMode="tel" />
      </Form.Item>

      <Form.Item
        label={copy.message}
        name="message"
        rules={[
          { required: true, whitespace: true, message: copy.messageRequired },
          { min: 10, message: copy.messageMin },
        ]}
      >
        <Input.TextArea
          placeholder={copy.messagePlaceholder}
          autoSize={{ minRows: 4, maxRows: 8 }}
          showCount
          maxLength={500}
        />
      </Form.Item>

      <Form.Item style={{ marginBottom: 0 }}>
        <Button
          type="primary"
          htmlType="submit"
          loading={submitting}
          icon={<SendOutlined />}
          iconPosition="end"
        >
          {copy.submit}
        </Button>
      </Form.Item>
    </Form>
  );
}
