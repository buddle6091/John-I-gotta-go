from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


browser = webdriver.Chrome()
browser.maximize_window() # 윈도우 창 최대화

url = "https://flight.naver.com/flights/"
browser.get(url) # url 로 이동

#편도선택
#browser.find_element_by_link_text("편도").click()

#왕복선택
browser.find_element_by_link_text("왕복").click()

#출발지 선택
browser.find_element_by_link_text("인천").click()
browser.find_element_by_link_text("서울(인천,김포)").click()

#도착지 선택
browser.find_element_by_link_text("도착").click()
browser.find_element_by_link_text("제주").click()

# 가는 날 선택 클릭 / 그 후 바로 오는 날로 연계 (왕복 선택시)
browser.find_element_by_link_text("가는날 선택").click()

# 해당월[0] 기준으로 예매
browser.find_elements_by_link_text("6")[0].click() # [1] "2" = 8월 2일
#browser.find_elements_by_class_name("a.calendar-btn-next-mon sp_flight").click()

browser.find_elements_by_link_text("7")[1].click() # [1] "7" = 8월 7일

# 인원수 선택
#browser.find_elements_by_link_text("성인 1명").click() 

# 클래스 선택
#browser.find_elements_by_link_text("전체").click() 
#browser.find_elements_by_link_text("일등석").click() 

# 항공권 검색 클릭
browser.find_element_by_link_text("항공권 검색").click()




try:
    elem = WebDriverWait(browser, 10).until(EC.presence_of_element_located((By.XPATH, "//*[@id='content']/div[2]/div/div[4]")))
    # 성공했을 때 동작 수행
    print(elem.text)

except:
    print('항공권 발급에 실패하였습니다.')
    


    

# 첫번째 결과 출력
# elem = browser.find_element_by_xpath("//*[@id='content']/div[2]/div/div[4]/ul/li[1]")
# print(elem.text)

# By (다양한 접근자 존재 NAME, TAG_NAME..)
# WebDriverWait(browser, 10)
# .until
# (EC.presence_of_element_located
#     (
#         (
#             By.XPATH, "//*[@id='content']/div[2]/div/div[4]/ul/li[1]"
#         )
#     )