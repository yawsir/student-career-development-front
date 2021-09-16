/*
 * @Author: yuyang
 * @Date: 2021-09-16 22:16:10
 * @LastEditTime: 2021-09-16 23:13:13
 * @LastEditors: yuyang
 */
// create by hygen
import React, { useState } from 'react';
import {
  Modal, ButtonProps, Button,
} from 'antd';

export interface TipValuesType {
  editHere: string;
}

interface TipModalProps {
  btnText?: string;
  btnType?: ButtonProps['type'];
  modalTitle?: React.ReactNode;
  onShow?: Function;
  onClose?: Function;
}

const TipModal: React.FC<TipModalProps> = (props) => {
  const {
    onShow, onClose, btnText, modalTitle, btnType = 'link', children,
  } = props;
  const [visible, toggleVisible] = useState<boolean>(false);

  const handleClick = () => {
    onShow?.();
    toggleVisible(true);
  };

  const handleCancel = () => {
    onClose?.();
    toggleVisible(false);
  };

  return (
    <>
      {
        children ? (
          <span onClick={handleClick}>
            {
              children
            }
          </span>
        )
          : (
            <Button
              type={btnType}
              onClick={handleClick}
            >
              {btnText || '修改'}
            </Button>
          )
      }
      <Modal
        visible={visible}
        onCancel={handleCancel}
        title={modalTitle || 'modalTitle'}
        destroyOnClose
        okText="确定"
        cancelText="取消"
        mask={false}
        closable={false}
      >
        <p className="text-gray-400">
          感谢各位家长对于教科院生涯发展支持平台的关注和支持，为更好的面向广大学生提供社会实践资源，如您所在企业或者其他企业资源具备条件展开家校深入合作，可联系家校业务合作专员，联系方式：XX，合作专员会详细对接并积极落实有效资源的落地，感谢您对于教育社会责任的承担与付出。
        </p>
      </Modal>
    </>
  );
};

export default TipModal;
