import React from 'react';
import Layout from '@theme-original/Footer/Layout';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <img referrerpolicy="no-referrer-when-downgrade" src="https://static.scarf.sh/a.png?x-pxid=1ae0716d-6256-423a-acf3-dc0a41f831c3" />
    </>
  );
}
