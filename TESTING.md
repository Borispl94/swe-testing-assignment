Testing strategy :
For the Quick-Calc, I employed a multi-layered testing strategy to ensure both the internal logic and the user interface function correctly.

- What was tested ? The core mathematical logic was tested using isolated unit tests. The interaction between the UI buttons and the underlying logic was tested by using integration tests.

- What was not tested ? I didn't write End-to-End tests or test the visual CSS, as the focus is absolutely on software quality and state management.

Lecture concepts applied :
- The testing pyramid : My test suite reflects the pyramid by having a broad base of fast, isolated Unit Tests (8) for the core logic and a smaller layer of integration tests (2) for the UI layer.

-Black-box vs White-box : The unit tests represent White-box testing, as they directly test internal functions and specific edge cases like 'b===0'. The integration tests use Black-box testing principles, interacting with the application purely through simulated user clicks without knowing the internal state.

-Regression : By running the test suite, this entire setup acts as an automated regression test. If I add a new feature in the future, running this suite will confirm if I've accidentally broken the basic calculation rules.

Summary :

| Test Name | Type | Status |
| :--- | :--- | :--- |
| correctly adds two numbers | Unit | Pass |
| correctly adds negative numbers | Unit | Pass |
| correctly subtracts two numbers | Unit | Pass |
| handles subtraction resulting in negative | Unit | Pass |
| correctly multiplies two numbers | Unit | Pass |
| correctly multiplies by zero | Unit | Pass |
| correctly divides two numbers | Unit | Pass |
| handles division by zero gracefully | Unit | Pass |
| simulates a full user interaction for addition | Integration | Pass |
| verifies that pressing Clear resets the display to 0 | Integration | Pass |

