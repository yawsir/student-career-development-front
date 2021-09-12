/* eslint-disable react/no-danger */
/*
 * @Author: yuyang
 * @Date: 2021-09-12 15:28:22
 * @LastEditTime: 2021-09-12 16:13:08
 * @LastEditors: yuyang
 */
import React from 'react';
import { useParams, history } from 'umi';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import NewsContainer from '@/components/NewsContainer';
import 'braft-editor/dist/output.css';
import news from '@/data/news';

interface ArticleProps {

}
const Article: React.FC<ArticleProps> = () => {
  const { id } = useParams<{ id: string }>();
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <NewsContainer>
      <div className="container mx-auto">
        <div className="flex flex-row-reverse px-8">
          <Button
            type="primary"
            icon={<LeftOutlined />}
            className="rounded"
            size="large"
            style={{ backgroundColor: '#5C739B', borderRadius: '0.75rem' }}
            onClick={handleGoBack}
          >
            返回
          </Button>
        </div>
        <div className="border-8 border-third border-solid p-12 bg-white">
          <h3 className="text-center text-primary text-4xl">{news[id]?.title}</h3>
          <div className="braft-output-content" dangerouslySetInnerHTML={{ __html: news[id]?.content }} />
          <div className="flex justify-center p-2">
            <Button
              type="primary"
              className="rounded"
              size="large"
              style={{ backgroundColor: '#5C739B', borderRadius: '0.75rem', fontSize: 18 }}
              onClick={handleGoBack}
            >
              返回列表
            </Button>
          </div>
        </div>
      </div>
    </NewsContainer>
  );
};

export default Article;
