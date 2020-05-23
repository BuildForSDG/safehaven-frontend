import styleNavbarAction from '../../../redux/actions/styleNavbarAction';
import mockStore from '../../../__mocks__/storeMock';
import { SET_NAVBAR_STYLE } from '../../../redux/actions/actionTypes';

describe('Style navbar action creator', () => {
  it('dispatches SET_NAVBAR_STYLE when landing page is mounted', async () => {
    const store = mockStore({
      navbarStyle: {
        backgroundColor: null
      }
    });
    const mockPayload = {
      backgroundColor: 'transparent'
    };

    await store.dispatch(styleNavbarAction(mockPayload));

    expect(store.getActions()).toEqual([
      {
        type: SET_NAVBAR_STYLE,
        payload: {
          backgroundColor: mockPayload.backgroundColor
        }
      }
    ]);
  });
});
