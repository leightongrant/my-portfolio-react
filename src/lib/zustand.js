import { create } from 'zustand'

export const useModalStore = create(set => ({
	show: false,
	mode: '',
	projectId: '',
	setProjectId: id => set({ projectId: id }),
	setMode: m => set({ mode: m }),
	showModal: () => set({ show: true }),
	closeModal: () => set({ show: false }),
	toggle: () => set(state => ({ show: !state.show })),
}))

export const useToastStore = create(set => ({
	show: false,
	result: { message: '', status: '' },
	setResult: result => set({ result }),
	showToast: () => set({ show: true }),
	closeToast: () => set({ show: false }),
	toggle: () => set(state => ({ show: !state.show })),
}))
