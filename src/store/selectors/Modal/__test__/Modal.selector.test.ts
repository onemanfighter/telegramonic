import { AlertComponentState, DrawerState, appStore } from '@store';
import { act, renderHook } from '@testing-library/react';
import { modalSelector } from '../Modal.selector';
import { ModalData } from 'src/store/slice/Modal/types';

jest.useFakeTimers();

describe('Modal selector', () => {
  const onModalCloseMock = jest.fn();
  const onPrimaryButtonClickMock = jest.fn();

  it('should return modal selector state and actions', () => {
    const modal = renderHook(() => appStore(modalSelector)).result.current;

    expect(modal).toMatchSnapshot();
  });

  it('should return modal state with initial value', () => {
    const { result } = renderHook(() => appStore(modalSelector));

    expect(result.current.modalData).toMatchSnapshot();
  });

  it('should return modal state on modal data set using openModal', () => {
    const modalData: ModalData = {
      title: 'title',
      message: 'message',
      onModalClose: onModalCloseMock,
      primaryButtonLabel: 'primaryButtonLabel',
      onPrimaryButtonClick: onPrimaryButtonClickMock,
    };
    const { result } = renderHook(() => appStore(modalSelector));

    act(() => {
      result.current.openModal(modalData);
    });

    expect(result.current.modalData).toMatchSnapshot();
  });

  it('should reset and close modal state on modal data set using closeModal', () => {
    const modalData: ModalData = {
      title: 'title',
      message: 'message',
      onModalClose: onModalCloseMock,
      primaryButtonLabel: 'primaryButtonLabel',
      onPrimaryButtonClick: onPrimaryButtonClickMock,
    };
    const { result } = renderHook(() => appStore(modalSelector));

    act(() => {
      result.current.openModal(modalData);
    });
    expect(result.current.modalData.title).toEqual('title');
    expect(result.current.modalData.message).toEqual('message');

    act(() => {
      result.current.closeModal();
      jest.runAllTimers();
    });

    expect(result.current.modalData.title).toEqual('');
    expect(result.current.modalData.message).toEqual('');
  });
});
