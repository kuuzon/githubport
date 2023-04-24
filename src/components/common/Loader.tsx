import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

// 1. Create our graphical Loader, to replace our text loading
// SEE MORE: https://react-bootstrap.github.io/components/spinners/
const Loader = (): JSX.Element => {
  return (
    <Spinner className="custom-spinner" animation="border" variant="info" />
  )
}

export default Loader