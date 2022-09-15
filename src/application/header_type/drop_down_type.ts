export interface DropDownType {
 id: number,
 name: string,
}

export interface DropdownProps {
 list: DropDownType[],
}

export const DropDownLanguage: DropDownType[] = [
 { id: 1, name: 'English' },
 { id: 2, name: 'Vietnamese' },
 { id: 3, name: 'Chinese' }
]

export const DropDownCurrency: DropDownType[] = [
 { id: 1, name: 'USD' },
 { id: 2, name: 'VND' },
 { id: 3, name: 'NDT' }
]