import React from 'react';
import { Loader } from 'semantic-ui-react';

const Spinner = () => (
	<Loader active inline='centered' style={{ margin: 40, fontSize: 30 }} />
);

export default Spinner;