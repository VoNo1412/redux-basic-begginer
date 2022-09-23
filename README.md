<!-- yarn add express -->
<!-- yarn server -->
<!-- yarn start -->

### REST API
    - Là một ứng dụng cho phép chuyển đổi cấu trúc dữ liệu với những phương thức giúp kết nối với các thưc viện và ứng dụng khác nhau.
    Thông qua những phương thức có sẵn của HTTP như GET POST DELETE PUT và trả về dữ liệu phổ biến như JSON & XML

### Callback
    - Callback là một function được function khác chỉ định làm đối số. Sau đó nó sẽ được gọi trong hàm chứa nó để hoàn thành một quy trình công việc.

### Closure
    - Closure là sự kết hợp giữa các func với nhau. Một closure có thể truy cập bên ngoài của một hàm từ một hàm bên trong.

### DOM (Document Object Model)

    + DOM có 5 - 6 loại
        + DOM element: lưu trữ toàn bộ các thành phần của website vào bên trong document.

        + DOM HTML: cho phép thay đổi thuộc tính hoặc nội dung của tag html
        
        + DOM CSS: cho phép thay đổi định dạng CSS của tag HTML

        + DOM events: Cho phép nắm bắt các sự kiện như onlick, onchange, onmouse...

        + DOM listener: cho phép lắng nghe các sự kiện tác động đến tag HTML

    + Thuộc tính
        + textContent
        + innerHTML
        + className
        + id
        + tagName
        + outerHTML

    + method:
        getElemenByID
        getElemensByClassName
        getElementsByTagName
        appendChild
        removeChild
        getAttr
        setAttr
    
    + Relations:
        parentNode
        childNode
        firstChild
        lastChild

### Lifecycle 
    - Gồm 3 giai đoạn

    + Mounting
    + Updateting
    + Unmouting

    + Mounting
        - constuctor()
        - getDerivedStateFromProps()
        - render()
        - componentDidMount()


    ...etc

### Redux
    Life(View - Action - State)

    <!-- react -->
    Components call redux events(through actions)

    <!-- redux -->
        <!-- actions -->
            - process api / call api
            - saving data to reducer(switch case)

        <!-- reducer -->
            - Loop inside action (switch case)
            - saving data to state(redux)


        <!-- mapStateToProps -->
            - connect react-redux

        <!-- mapDispatchToProps -->
            - fire actions with component click

    <!-- Review -->
        action -> procees data saving data
        reducer(switch case) -> state(redux)
        mapStateToProps(react-redux)
        mapDispatchToProps(react-redux)

### JSX
    - Đơn giản là viết logic bên trong HTML
