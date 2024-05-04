import { appStore } from '@store';
import { act, renderHook } from '@testing-library/react';
import { ModalData } from 'src/store/slice/Modal/types';

jest.useFakeTimers();

describe('Modal slice', () => {
  const onModalCloseMock = jest.fn();
  const onPrimaryButtonClickMock = jest.fn();

  it('should return modal selector state and actions', () => {
    const modal = renderHook(() => appStore()).result.current;

    expect(modal).toMatchSnapshot();
  });

  it('should return modal state with initial value', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Modal.modalData).toMatchSnapshot();
  });

  it('should return modal state on modal data set using openModal', () => {
    const modalData: ModalData = {
      title: 'title',
      message: 'message',
      onModalClose: onModalCloseMock,
      primaryButtonLabel: 'primaryButtonLabel',
      onPrimaryButtonClick: onPrimaryButtonClickMock,
    };
    const { result } = renderHook(() => appStore());

    act(() => {
      result.current.Modal.openModal(modalData);
    });

    expect(result.current.Modal.modalData).toMatchSnapshot();
  });

  it('should reset and close modal state on modal data set using closeModal', () => {
    const modalData: ModalData = {
      title: 'title',
      message: 'message',
      onModalClose: onModalCloseMock,
      primaryButtonLabel: 'primaryButtonLabel',
      onPrimaryButtonClick: onPrimaryButtonClickMock,
    };
    const { result } = renderHook(() => appStore());

    act(() => {
      result.current.Modal.openModal(modalData);
    });
    expect(result.current.Modal.modalData.title).toEqual('title');
    expect(result.current.Modal.modalData.message).toEqual('message');

    act(() => {
      result.current.Modal.closeModal();
      jest.runAllTimers();
    });

    expect(result.current.Modal.modalData.title).toEqual('');
    expect(result.current.Modal.modalData.message).toEqual('');
  });
});
