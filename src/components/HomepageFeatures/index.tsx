
// import React from 'react';

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '容于维护和使用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       yf-ui组件库是基于antd封装的ui组件库，设计是很容易使用的，完善的文档与demo演示。定义规定的代码规范，对于未来更容易维护，减少代码冗余。
      </>
    ),
  },
  {
    title: '关注业务开发的事情',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
        yf-ui组件库，专做复杂与底层逻辑实现，让我们做开发变得更加简单。使用yf-ui组件库，基本业务开发者只要直接和后台配置字段即可完成业务对接， 相同类似的开发可以提高 
        <code> 30% ~ 50% </code>  开发效率。
      </>
    ),
  },
  {
    title: '丰富的接口支持',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>

       yf-ui组件库，具有丰富的接口支持，不管定制化业务或个性化业务，都预留有接口支持。支持覆盖内部方法，以及调用底层 antd api 接口

        {/* Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer. */}


      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
