// 채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 
// 담긴 문자열 배열 record가 매개변수로 주어질 때, 
// 모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 
// 보게 되는 메시지를 문자열 배열 형태로 
// return 하도록 solution 함수를 완성하라.

// Precautions
// record는 다음과 같은 문자열이 담긴 배열이며, 
// 길이는 1 이상 100,000 이하이다.
// 다음은 record에 담긴 문자열에 대한 설명이다.
// 모든 유저는 [유저 아이디]로 구분한다.
// [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 
// - "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
// [유저 아이디] 사용자가 채팅방에서 퇴장
// - "Leave [유저 아이디]" (ex. "Leave uid1234")
// [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 
// - "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi")
// 첫 단어는 Enter, Leave, Change 중 하나이다.
// 각 단어는 공백으로 구분되어 있으며, 
// 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
// 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
// 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
// 채팅방에서 나간 유저가 닉네임을 변경하는 등 
// 잘못 된 입력은 주어지지 않는다.

// solution 1
// 채팅방 기록을 남길 배열과(arr)
// 최종 닉네임을 담을 객체를 만든다.(obj)
// record 배열의 반복문을 만들어
// 요소의 공백을 기준으로 배열 변수에 할당한다.
// change가 아니면 해당하는 상태에 따른
// id와 text를 arr에 push한다.
// 그리고 닉네임이 있다면 해당하는 
// id에 닉네임을 키와 값의 형태로 obj에 할당한다.
// 반복문이 종료되고 만들어진 arr를 다시 map으로
// 접근해서 obj의 최종 닉네임으로 새로 할당한 배열을 반환한다.
function solution(record) {
    let obj = {}
    let arr = []
    record.forEach(ele => {
        let [state, id, name] = ele.split(' ')
        if (state !== "Change") {
            arr.push({id, text: state === 'Enter' ? '님이 들어왔습니다.' : '님이 나갔습니다.'})
        }
        if (name) {
            obj[id] = name
        }
    })
    
    return arr.map(ele => obj[ele.id] + ele.text)
}