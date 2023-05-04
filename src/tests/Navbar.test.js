import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from '../page/Navbar';

describe('Navigation', () => {
  test('should match Navbar snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Navigation />
        ,
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
