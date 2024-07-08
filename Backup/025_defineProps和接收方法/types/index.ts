// 定義一個介面，用於限制 person 物件具體屬性
export interface PersonInter {
	id: string;
	name: string;
	age: number;
	// ? 可有可無
	x?: number;
}

// 定義一個類型
export type Persons = Array<PersonInter>;

// 也可
// export type Persons = PersonInter[];
