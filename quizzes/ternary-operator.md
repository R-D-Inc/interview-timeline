### 三項演算子（Ternary Operator）

#### 初級 (Beginner)
1. 次のコードの出力は何ですか？
   ```typescript
   const result = 5 > 3 ? "Yes" : "No";
   console.log(result);
   ```

2. 三項演算子の一般的な構文はどれですか？
   a) `condition ? expr1 : expr2`
   b) `condition ? expr1`
   c) `condition : expr1 ? expr2`

3. 次のコードの出力は何ですか？
   ```typescript
   const age = 18;
   const canVote = age >= 18 ? "Yes" : "No";
   console.log(canVote);
   ```

4. 次のコードの出力は何ですか？
   ```typescript
   const x = 10;
   const y = x < 5 ? "Small" : "Large";
   console.log(y);
   ```

5. 三項演算子はどのような時に使いますか？
   a) 条件に基づいて値を返したいとき
   b) 繰り返し処理を行いたいとき
   c) 関数を定義したいとき

#### 中級 (Intermediate)
6. 次のコードの出力は何ですか？
   ```typescript
   const score = 85;
   const grade = score > 90 ? "A" : score > 80 ? "B" : "C";
   console.log(grade);
   ```

7. 次のコードの出力は何ですか？
   ```typescript
   const num = -5;
   const type = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
   console.log(type);
   ```

8. 次のコードの出力は何ですか？
   ```typescript
   const temp = 30;
   const weather = temp > 25 ? "Hot" : temp > 15 ? "Warm" : "Cold";
   console.log(weather);
   ```

9. 三項演算子を使って、次のif文を短く書き直してください。
   ```typescript
   let message;
   if (isLoggedIn) {
     message = "Welcome back!";
   } else {
     message = "Please log in.";
   }
   ```

10. 次のコードの出力は何ですか？
    ```typescript
    const speed = 70;
    const status = speed > 60 ? "Speeding" : speed < 30 ? "Too Slow" : "Normal";
    console.log(status);
    ```

#### 上級 (Advanced)
11. 次のコードの出力は何ですか？
    ```typescript
    const light = "green";
    const action = light === "green" ? "Go" : light === "yellow" ? "Caution" : "Stop";
    console.log(action);
    ```

12. 次のコードの出力は何ですか？
    ```typescript
    const stock = 0;
    const availability = stock > 0 ? "In Stock" : stock === 0 ? "Out of Stock" : "Invalid";
    console.log(availability);
    ```

13. 三項演算子を使って、次のコードを短く書き直してください。
    ```typescript
    let fee;
    if (age < 18) {
      fee = 10;
    } else if (age >= 18 && age < 65) {
      fee = 20;
    } else {
      fee = 15;
    }
    ```

14. 次のコードの出力は何ですか？
    ```typescript
    const length = 4;
    const size = length > 5 ? "Long" : length > 2 ? "Medium" : "Short";
    console.log(size);
    ```

15. 次のコードの出力は何ですか？
    ```typescript
    const value = null;
    const result = value ? "Defined" : "Undefined";
    console.log(result);
    ```

16. 次のコードの出力は何ですか？
    ```typescript
    const examScore = 75;
    const passFail = examScore >= 50 ? "Pass" : "Fail";
    const message = `You ${passFail} the exam.`;
    console.log(message);
    ```

17. 次のコードの出力は何ですか？
    ```typescript
    const num = 10;
    const parity = num % 2 === 0 ? "Even" : "Odd";
    console.log(parity);
    ```

18. 三項演算子を使って、次のif文を短く書き直してください。
    ```typescript
    let discount;
    if (member) {
      discount = 20;
    } else {
      discount = 0;
    }
    ```

19. 次のコードの出力は何ですか？
    ```typescript
    const grade = 65;
    const remark = grade >= 75 ? "Excellent" : grade >= 50 ? "Good" : "Needs Improvement";
    console.log(remark);
    ```

20. 次のコードの出力は何ですか？
    ```typescript
    const season = "winter";
    const activity = season === "summer" ? "Swimming" : season === "winter" ? "Skiing" : "Hiking";
    console.log(activity);
    ```
