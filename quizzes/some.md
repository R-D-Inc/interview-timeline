### TypeScriptにおけるArrayクラスの`some`プロトタイプ関数

#### 初級 (Beginner)
1. `some` メソッドの基本的な構文を示してください。

2. 次のコードの出力は何ですか？
   ```typescript
   const numbers = [1, 2, 3, 4, 5];
   const result = numbers.some(num => num > 3);
   console.log(result);
   ```

3. `some` メソッドは配列内のすべての要素をチェックしますか？

4. 次のコードの出力は何ですか？
   ```typescript
   const values = [0, null, undefined, false];
   const result = values.some(Boolean);
   console.log(result);
   ```

5. `some` メソッドのコールバック関数の返り値は何を意味しますか？

#### 中級 (Intermediate)
6. 次のコードの出力は何ですか？
   ```typescript
   const words = ["apple", "banana", "cherry"];
   const result = words.some(word => word.length > 5);
   console.log(result);
   ```

7. 次のコードの出力は何ですか？
   ```typescript
   const nums = [10, 20, 30];
   const result = nums.some(num => num < 0);
   console.log(result);
   ```

8. 次のコードの出力は何ですか？
   ```typescript
   const values = [0, 1, 2, 3];
   const result = values.some(Boolean);
   console.log(result);
   ```

9. `some` メソッドのコールバック関数にアクセスできる4つの引数は何ですか？

10. 次のコードの出力は何ですか？
    ```typescript
    const numbers = [1, 2, 3, 4, 5];
    const isEven = numbers.some((num, index) => {
      console.log(`Checking index ${index}`);
      return num % 2 === 0;
    });
    console.log(isEven);
    ```

#### 上級 (Advanced)
11. 次のコードの出力は何ですか？
    ```typescript
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 }
    ];
    const isOlderThan30 = people.some(person => person.age > 30);
    console.log(isOlderThan30);
    ```

12. 次のコードの出力は何ですか？
    ```typescript
    const data = [1, 2, 3, 4, 5];
    const hasNegative = data.some(num => num < 0);
    console.log(hasNegative);
    ```

13. 次のコードの出力は何ですか？
    ```typescript
    const chars = ['a', 'b', 'c', 'd'];
    const hasA = chars.some(char => char === 'a');
    console.log(hasA);
    ```

14. 次のコードの出力は何ですか？
    ```typescript
    const transactions = [
      { amount: 100, type: "credit" },
      { amount: -20, type: "debit" },
      { amount: 30, type: "credit" }
    ];
    const hasDebit = transactions.some(transaction => transaction.type === "debit");
    console.log(hasDebit);
    ```

15. 次のコードの出力は何ですか？
    ```typescript
    const names = ["John", "Jane", "Joe"];
    const hasShortName = names.some(name => name.length === 3);
    console.log(hasShortName);
    ```

16. 次のコードの出力は何ですか？
    ```typescript
    const scores = [80, 90, 100];
    const hasPerfectScore = scores.some(score => score === 100);
    console.log(hasPerfectScore);
    ```

17. 次のコードの出力は何ですか？
    ```typescript
    const votes = ['yes', 'no', 'abstain'];
    const hasYesVote = votes.some(vote => vote === 'yes');
    console.log(hasYesVote);
    ```

18. 次のコードの出力は何ですか？
    ```typescript
    const items = [5, 10, 15, 20];
    const hasItemGreaterThan15 = items.some(item => item > 15);
    console.log(hasItemGreaterThan15);
    ```

19. 次のコードの出力は何ですか？
    ```typescript
    const students = [
      { name: "A", score: 85 },
      { name: "B", score: 90 },
      { name: "C", score: 78 }
    ];
    const hasTopScorer = students.some(student => student.score > 90);
    console.log(hasTopScorer);
    ```

20. 次のコードの出力は何ですか？
    ```typescript
    const books = [
      { title: "Book 1", pages: 200 },
      { title: "Book 2", pages: 150 },
      { title: "Book 3", pages: 300 }
    ];
    const hasLargeBook = books.some(book => book.pages > 250);
    console.log(hasLargeBook);
    ```
