export interface iMockData {
    course: iCourse,
    state: iState,
    isDynamic: boolean,
    isAllList: boolean,
}

export interface iCourse {
    name: string,
    date: string,
    editable: boolean
}

export interface iState {
    total: number,
    active: number,
    new_today: number,
    removed: number,
    blocked: number,
    stopped: number,
}

export class Row {
    constructor(
       public name_and_date?: iCourse,
       public status_icon?: string,
       public active?: number,
       public new_today?: number,
       public removed?: number,
       public blocked?: number,
       public stopped?: number,
       public total?: number,
    ) { }
}

