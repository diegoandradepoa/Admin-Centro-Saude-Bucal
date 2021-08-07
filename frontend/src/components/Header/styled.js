import styled from "styled-components";

export const AreaHeader = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #a33232,#7d3033);
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;

    }
        .logo{
            img{
                width: 50px;
            }
        }

        nav{
            ul{
                display: flex;
                font-weight: bold;

            }

            li{
                list-style: none;
                margin-left: 20px;

                a{
                    text-decoration: none;
                    color: #fff;

                    &:hover{
                        color: #ecf0f1;
                    }
                }
            }
        }
`;
