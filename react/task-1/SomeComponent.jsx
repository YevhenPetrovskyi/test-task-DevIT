import { useState } from 'react';
import MyModal from './MyModal';

const SomeComponent = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>

      <MyModal open={open} disableGlobalScroll={true}>
        <div>
          <h1>Some content</h1>
          <button onClick={() => setOpen(false)}>close</button>
        </div>
      </MyModal>
    </>
  );
};

export default SomeComponent;
