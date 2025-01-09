export const PROJECT_LIST = [
  {
    id: '1',
    title: '포트폴리오 웹사이트 (Next.js 15)',
    url_slug: '포트폴리오',
    description:
      'Next.js 15로 마이그레이션 한 포트폴리오 웹사이트입니다. Recoil은 호환성 문제로 대체되었습니다. tanstack과 three.js를 활용하여 만들었습니다.',
    link: 'https://portfolio.whitemouse.dev/',
    thumbnail: ['/projects/1.png'],
    created_at: '2025-01-02',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn/UI'],
    content: `## 문제 출처

https://school.programmers.co.kr/learn/courses/30/lessons/181832

---

## 문제

양의 정수 \`n\`이 매개변수로 주어집니다. \`n\` × \`n\` 배열에 1부터 \`n\`^2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

---

## 내 답안
\`\`\`python
def solution(n):
    # n x n 크기의 2차원 배열을 0으로 초기화
    matrix = [[0]*n for _ in range(n)]
    
    # 시계방향 순서로 우(→), 하(↓), 좌(←), 상(↑) 방향을 정의
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    
    # 시작 방향 인덱스와 시작 좌표 초기화
    direction_index = 0
    x, y = 0, 0
    
    # 1부터 n^2까지 배열에 순차적으로 숫자 삽입
    for i in range(1, n ** 2 + 1):
        # 현재 위치에 숫자 할당
        matrix[x][y] = i
        
        # 다음 위치 계산
        nx, ny = x + directions[direction_index][0], y + directions[direction_index][1]
        
        # 경계 조건 검사 (배열 범위를 벗어나거나 이미 채워진 경우)
        if nx < 0 or ny < 0 or nx >= n or ny >= n or matrix[nx][ny] != 0:
            # 방향을 시계방향으로 전환
            direction_index = (direction_index + 1) % 4
            # 새로운 방향으로 다음 위치 재계산
            nx, ny = x + directions[direction_index][0], y + directions[direction_index][1]
        
        # 다음 위치로 이동
        x, y = nx, ny

    # 최종적으로 생성된 나선형 배열 반환
    return matrix
\`\`\`

--- 

## 결론 및 느낀점

이 문제는 \`우 → 하 → 좌 → 상\` 순서의 방향 배열을 활용하여, 시계 방향으로 나선형 패턴을 그리며 숫자를 채우는 문제였다. 노트에 직접 그림을 그려가며 접근했을 때는 간단해 보였지만, 코드를 작성하려고 하니 경계 조건과 방향 전환을 구현하는 과정에서 막막함이 느껴졌다.

그러나 문제를 작은 단위로 나누어, 2차원 배열의 인덱스와 방향 전환의 원리를 이해하고 나니 점진적으로 해결할 수 있었다. 특히, \`directions\` 배열과 방향 전환을 다루는 방식이 직관적이고 코드의 가독성을 크게 향상시켰다고 생각한다.

전체적으로 문제를 차분히 분석하고, 하나씩 코드를 작성해 나가면 복잡해 보이는 문제도 충분히 해결할 수 있다는 점을 다시 한번 느꼈다.`,
    github_url: 'https://github.com/kimkuns91/kkw_portfolio',
  },
];
