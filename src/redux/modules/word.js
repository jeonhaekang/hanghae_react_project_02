import { db } from "../../firebase"
import { limit, orderBy, collection, doc, getDoc, getDocs, updateDoc, addDoc, deleteDoc, Timestamp, query } from "firebase/firestore";
import { async } from "@firebase/util";

// action
const CREATE = "word/CREATE";
const MODIFY = "word/MODIFY";
const DELETE = "word/DELETE";
const LOAD = "word/LOAD";
const CHKUPDATE = "word/CHECKUPDATE"

const initialState = {
    list: []
};

// actionCreate
export const createWord = (data) => {
    return { type: CREATE, data };
};

export const removeWord = (id) => {
    return { type: DELETE, id };
}

export const loadWord = (wordList) => {
    return { type: LOAD, wordList }
}

export const chkUpdate = (id) => {
    return { type: CHKUPDATE, id }
}

export const modifyWord = (data) => {
    return { type: MODIFY, data }
}

export const chkUpdateFB = (el) => {
    return async function (dispatch) {
        const docRef = doc(db, "word", el.id)
        updateDoc(docRef, { check: !el.check });

        dispatch(chkUpdate(docRef.id));
    }
}

//middleWares
export const loadWordFB = () => {
    return async function (dispatch) {
        const query_data = query(collection(db, "word"), orderBy("time", "desc"))
        const word_data = await getDocs(query_data);

        let word_list = [];
        word_data.forEach((el) => {
            word_list.push({ id: el.id, ...el.data() })
        });

        dispatch(loadWord(word_list))
    }
}

export const addWordFB = (data) => {
    return async function (dispatch) {
        const docData = {
            ...data,
            check: false,
            time: Timestamp.fromDate(new Date())
        }
        const addWord = await addDoc(collection(db, "word"), docData);
        const word_data = { id: addWord.id, ...data, check: false }

        dispatch(createWord(word_data));
    }
}



export const removeWordFB = (id) => {
    return async function (dispatch) {
        const docRef = await doc(db, "word", id)
        await deleteDoc(docRef);

        dispatch(removeWord(id))
    }
}

export const modifyWordFB = (data) => {
    return async function (dispatch) {
        const docRef = doc(db, "word", data.id)
        updateDoc(docRef, data)

        dispatch(modifyWord(data))
    }
}

// reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "word/MODIFY": {
            const update_list = state.list.map(el => {
                if (el.id === action.data.id) {
                    console.log(el.id, action.data.id)
                    return action.data;
                } else {
                    return el;
                }
            });
            return { list: update_list }
        }
        case "word/CHECKUPDATE": {
            const update_list = state.list.map((el) => {
                if (el.id === action.id) {
                    return { ...el, check: !el.check };
                } else {
                    return el
                }
            })
            return { list: [...update_list] };
        }
        case "word/LOAD": {
            return { list: action.wordList };
        }
        case "word/CREATE":
            const new_word = [action.data, ...state.list];
            return { list: new_word };
        case "word/DELETE":
            let del_list = state.list.filter((el) => {
                if (action.id !== el.id) {
                    return true;
                }
            });
            return { list: del_list };
        default:
            return state;
    }
}