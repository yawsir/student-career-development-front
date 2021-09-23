/*
 * @Author: yuyang
 * @Date: 2021-09-16 22:16:10
 * @LastEditTime: 2021-09-23 23:23:36
 * @LastEditors: yuyang
 */
// create by hygen
import React, { useState } from 'react';
import {
  Modal,
} from 'antd';

export interface TipValuesType {
  editHere: string;
}

interface TipModalProps {
  modalTitle?: React.ReactNode;
  onClose?: Function;
}

const TipModal: React.FC<TipModalProps> = (props) => {
  const {
    onClose, modalTitle,
  } = props;
  const [visible, toggleVisible] = useState<boolean>(true);

  const handleCancel = () => {
    onClose?.();
    toggleVisible(false);
  };

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      onOk={handleCancel}
      title={modalTitle || 'modalTitle'}
      destroyOnClose
      okText="确定"
      cancelText="取消"
      mask={false}
      closable={false}
      maskStyle={{
        display: 'none',
      }}
      cancelButtonProps={{
        style: {
          display: 'none',
        },
      }}
    >
      <p className="text-gray-400">
        资源统筹中，静待发布......
      </p>
    </Modal>
  );
};

export default TipModal;
