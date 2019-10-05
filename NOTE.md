## React hooks

from https://ithelp.ithome.com.tw/articles/10217085

### JSX

- expression in `{}`
- inline-style should be an Object

```javascript
// inline-style
const someStyle = {
  backgroundColor: white,
  fontSize: '20px',          // 也可以寫 20，引號和 px 可以省略
  border: '1px solid white',
  padding: 10,               // 省略 px，樣式會自動帶入單位變成 '10px'
}

const Element = (
  <div style={someStyle} />
)
```



### React Component

一段 JSX 可以當作變數，
所以 React Component 簡單來說，
就是一個 `會回傳一段 JSX 的 JavsScript 函數` 。

```javascript
const SimpleCompo = () => {
  return (
  	<div className='container'>
    	<h1> hello world </h1>
    </div>
  )
}
```

#### 存著 JSX 的變數 vs React Component

![Imgur](https://i.imgur.com/91Pu2cO.png)

React Component 必須用 `</>` 的方式使用！

### useState

範例：

```javascript
const [count, setCount] = useState(<資料預設值>);
```

畫面要更新並不只是因為 `count` 的值改變，而是因為：

1. `setCount` be called
2. `count` changed

這兩個條件缺一不可。釐清這點相當重要，才不會覺得為什麼明明有呼叫 `setCount`但畫面沒變，或 `count`的值有變但畫面卻沒重新渲染。

### No Hooks in  conditions, loops, nested functions

React Hooks 的方法都會以 `use`作為函式名稱的開頭，例如，`useState`、`useEffect`、`useCallback`，「**不能在條件式（conditions）、迴圈（loops）或嵌套函式（nested functions）中呼叫 Hook 方法**」。


