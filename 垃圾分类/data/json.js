var json = {
  "001": [
    {
      "question": "爸爸的爸爸叫什么?",
      "option": {
        "A": "爷爷",
        "B": "姥爷",
        "C": "叔叔",
        "D": "伯伯",
        "E": "阿姨",
        "F": "老舅"
      },
      "true": "A",   // 正确答案
      "type": 1,     // 类型 1 单选  2 多选
      "scores": 10,  // 分值
      "checked": false  // 默认没有选中
    },
    {
      "question": "妈妈的姐妹叫什么?",
      "option": {
        "A": "姥姥",
        "B": "奶奶",
        "C": "叔叔",
        "D": "大姨",
        "E": "小姨",
        "F": "老舅"
      },
      "true": ["D", "E"],   // 正确答案
      "type": 2,     // 类型 1 单选  2 多选
      "scores": 10,  // 分值
      "checked": false  // 默认没有选中
    },
    ],
  "002": [
    // ...数据格式同上
  ]

}
module.exports = {
  questionList: json
}