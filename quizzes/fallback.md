
### 論理演算子による値のフォールバック (Fallback using Logical Operators)

#### 初級 (Beginner)
1. 次のコードの出力は何ですか？
   ```typescript
   const name = "" || "Guest";
   console.log(name);
   ```

2. 次のコードの出力は何ですか？
   ```typescript
   const isLoggedIn = false || true;
   console.log(isLoggedIn);
   ```

3. 論理演算子 `||` の動作を説明してください。

4. 次のコードの出力は何ですか？
   ```typescript
   const user = null || "Anonymous";
   console.log(user);
   ```

5. 次のコードの出力は何ですか？
   ```typescript
   const result = undefined || "default";
   console.log(result);
   ```

#### 中級 (Intermediate)
6. 次のコードの出力は何ですか？
   ```typescript
   const primary = "blue";
   const secondary = "red";
   const color = primary || secondary;
   console.log(color);
   ```

7. 次のコードの出力は何ですか？
   ```typescript
   const isOnline = true && false;
   console.log(isOnline);
   ```

8. 論理演算子 `&&` の動作を説明してください。

9. 次のコードの出力は何ですか？
   ```typescript
   const a = null;
   const b = undefined;
   const c = "value";
   const result = a || b || c;
   console.log(result);
   ```

10. 次のコードの出力は何ですか？
    ```typescript
    const valid = true;
    const status = valid && "Active";
    console.log(status);
    ```

#### 上級 (Advanced)
11. 次のコードの出力は何ですか？
    ```typescript
    const username = "";
    const displayName = username || "Default User";
    console.log(displayName);
    ```

12. 次のコードの出力は何ですか？
    ```typescript
    const isAuthenticated = false;
    const access = isAuthenticated && "Granted";
    console.log(access);
    ```

13. 次のコードの出力は何ですか？
    ```typescript
    const firstName = null;
    const lastName = "Smith";
    const fullName = firstName || lastName;
    console.log(fullName);
    ```

14. 次のコードの出力は何ですか？
    ```typescript
    const isAdmin = true;
    const isManager = false;
    const role = isAdmin && "Admin" || isManager && "Manager" || "User";
    console.log(role);
    ```

15. 次のコードの出力は何ですか？
    ```typescript
    const available = 0;
    const inStock = available || "Out of Stock";
    console.log(inStock);
    ```

16. 次のコードの出力は何ですか？
    ```typescript
    const input = "data";
    const output = input && "Received";
    console.log(output);
    ```

17. 次のコードの出力は何ですか？
    ```typescript
    const isVerified = true;
    const profileStatus = isVerified && "Verified" || "Unverified";
    console.log(profileStatus);
    ```

18. 次のコードの出力は何ですか？
    ```typescript
    const isMember = true;
    const discount = isMember && 20 || 0;
    console.log(discount);
    ```

19. 次のコードの出力は何ですか？
    ```typescript
    const optionA = null;
    const optionB = undefined;
    const optionC = "chosen";
    const selection = optionA || optionB || optionC || "default";
    console.log(selection);
    ```

20. 次のコードの出力は何ですか？
    ```typescript
    const isActive = false;
    const message = isActive ? "Active" : "Inactive";
    console.log(message);
    ```
