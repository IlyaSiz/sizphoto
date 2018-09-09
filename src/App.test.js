import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Search, Button, Table } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    test('there is correct snapshot', () => {
        const component = renderer.create(<App />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Search', () => {
    const props = {
        onChange: () => {},
        onSubmit: () => {},
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search {...props}>Find</Search>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    test('there is correct snapshot', () => {
        const component = renderer.create(
            <Search {...props}>Find</Search>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Button', () => {
    const props = {
        onClick: () => {}
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button {...props}>More stories</Button>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    test('there is correct snapshot', () => {
        const component = renderer.create(
            <Button {...props}>More stories</Button>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Table', () => {
    const props = {
        list: [
            { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
            { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
        ],
        sortKey: 'TITLE',
        isSortReverse: false,
        onDismiss: () => {}
    };
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Table { ...props } />, div);
    });
    test('there is correct snapshot', () => {
        const component = renderer.create(
            <Table { ...props } />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('shows two items in list', () => {
        const element = shallow(<Table { ...props } />);
        expect(element.find('.table-row').length).toBe(2);
    });
});

// describe('Data fetching', () => {
//
//     const result = {
//         data: {
//             hits: [
//                 { objectID: '1', url: 'https://blog.com/hello', title: 'hello', },
//                 { objectID: '2', url: 'https://blog.com/there', title: 'there', },
//             ],
//         }
//     };
//
//     const promise = Promise.resolve(result);
//
//     beforeAll(() => {
//         sinon
//             .stub(axios, 'get')
//             .withArgs('https://hn.algolia.com/api/v1/search?query=redux')
//             .returns(promise);
//     });
//
//     afterAll(() => {
//         axios.get.restore();
//     });
//
//     it('renders data when it fetched data successfully', (done) => {
//
//     });
//
//     it('stores data in local state', (done) => {
//         const wrapper = mount(<App />);
//         expect(wrapper.state().hits).toEqual([]);
//         promise.then(() => {
//             wrapper.fetchSearchTopStories("redux");
//             expect(wrapper.state().hits).toEqual(result.data.hits);
//             done();
//         });
//     });
// });