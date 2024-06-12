### JSにおけるtruthy, falsy (Truthy and Falsy in JS)

#### 初級 (Beginner)
1. 次の値のどれがfalsyですか？
   ```typescript
   a) `0`
   b) `"0"`
   c) `1`
   d) `{}`
    ```

2. 次のコードの出力は何ですか？
   ```typescript
   const value = 0;
   if (value) {
     console.log("Truthy");
   } else {
     console.log("Falsy");
   }
   ```

3. `null` はtruthyですか、falsyですか？

4. 次のコードの出力は何ですか？
   ```typescript
   const text = "";
   if (text) {
     console.log("Truthy");
   } else {
     console.log("Falsy");
   }
   ```

5. 次のコードの出力は何ですか？
   ```typescript
   const value = 1;
   console.log(!!value);
   ```

#### 中級 (Intermediate)
6. 次のコードの出力は何ですか？
   ```typescript
   const name = "John";
   const result = name ? "Hello, " + name : "No name provided";
   console.log(result);
   ```

7. `undefined` はtruthyですか、falsyですか？

8. 次のコードの出力は何ですか？
   ```typescript
   const arr = [];
   if (arr) {
     console.log("Truthy");
   } else {
     console.log("Falsy");
   }
   ```

9. 次のコードの出力は何ですか？
   ```typescript
   const num = -1;
   console.log(!!num);
   ```

10. 次のコードの出力は何ですか？
    ```typescript
    const value = "false";
    if (value) {
      console.log("Truthy");
    } else {
      console.log("Falsy");
    }
    ```

#### 上級 (Advanced)
11. 次のコードの出力は何ですか？
    ```typescript
    const obj = null;
    const status = obj ? "Exists" : "Does not exist";
    console.log(status);
    ```

12. 次のコードの出力は何ですか？
    ```typescript
    const isAvailable = true;
    const message = isAvailable ? "Available" : "Not Available";
    console.log(message);
    ```

13. 次のコードの出力は何ですか？
    ```typescript
    const value = NaN;
    console.log(!!value);
    ```

14. 次のコードの出力は何ですか？
    ```typescript
    const value = {};
    if (value) {
      console.log("Truthy");
    } else {
      console.log("Falsy");
    }
    ```

15. 次のコードの出力は何ですか？
    ```typescript
    const test = undefined;
    const result = test ? "Defined" : "Undefined";
    console.log(result);
    ```

16. 次のコードの出力は何ですか？
    ```typescript
    const num = 0;
    const isPositive = num > 0 ? "Positive" : "Not Positive";
    console.log(isPositive);
    ```

17. 次のコードの出力は何ですか？
    ```typescript
    const str = "0";
    if (str) {
      console.log("Truthy");
    } else {
      console.log("Falsy");
    }
    ```

18. 次のコードの出力は何ですか？
    ```typescript
    const bool = false;
    console.log(bool ? "Truthy" : "Falsy");
    ```

19. 次のコードの出力は何ですか？
    ```typescript
    const arr = [1, 2, 3];
    console.log(arr.length ? "Truthy" : "Falsy");
    ```

20. 次のコードの出力は何ですか？
    ```typescript
    const obj = {};
    const status = obj ? "Exists" : "Does not exist";
    console.log(status);
    ```
