import React from 'react';
import renderer from 'react-test-renderer';

import ContainerExample from '../containers/ContainerExample/ContainerExample';

let text = 'This is a test!';

it('renders correctly', () => {
    const tree = renderer.create(
        <ContainerExample text={text}></ContainerExample>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
