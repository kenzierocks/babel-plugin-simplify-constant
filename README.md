babel-plugin-simplify-constant
====================

Replaces some constant expressions with their result.

### Example
Input:
```javascript
const aTrue = !0;
const aFalse = !1;
```
Output:
```javascript
const aTrue = true;
const aFalse = false;
```
