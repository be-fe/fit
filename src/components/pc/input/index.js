
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/input/readme.md'
                import '../../../../lib/pc/input/demo'

                const store = createStore()

                
                        import InputSource from '../../../../lib/pc/input/src/input'
                        import InputSourceCode from 'text!../../../../lib/pc/input/src/input'
                        

                
                    import BasicComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/input/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/input/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/input/demo/lists/basic.md'
                    
                    import DefaultComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/input/demo/lists/default.js'
                    import DefaultCode from 'text!../../../../lib/pc/input/demo/lists/default.js'
                    import DefaultMarkdown from '../../../../lib/pc/input/demo/lists/default.md'
                    
                    import CallbackComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/input/demo/lists/callback.js'
                    import CallbackCode from 'text!../../../../lib/pc/input/demo/lists/callback.js'
                    import CallbackMarkdown from '../../../../lib/pc/input/demo/lists/callback.md'
                    
                    import DisabledComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/input/demo/lists/disabled.js'
                    import DisabledCode from 'text!../../../../lib/pc/input/demo/lists/disabled.js'
                    import DisabledMarkdown from '../../../../lib/pc/input/demo/lists/disabled.md'
                    
                    import FlexComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/input/demo/lists/flex.js'
                    import FlexCode from 'text!../../../../lib/pc/input/demo/lists/flex.js'
                    import FlexMarkdown from '../../../../lib/pc/input/demo/lists/flex.md'
                    
                    import IconComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/input/demo/lists/icon.js'
                    import IconCode from 'text!../../../../lib/pc/input/demo/lists/icon.js'
                    import IconMarkdown from '../../../../lib/pc/input/demo/lists/icon.md'
                    
                    import TextareaComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/input/demo/lists/textarea.js'
                    import TextareaCode from 'text!../../../../lib/pc/input/demo/lists/textarea.js'
                    import TextareaMarkdown from '../../../../lib/pc/input/demo/lists/textarea.md'
                    
                    import ClearComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/input/demo/lists/clear.js'
                    import ClearCode from 'text!../../../../lib/pc/input/demo/lists/clear.js'
                    import ClearMarkdown from '../../../../lib/pc/input/demo/lists/clear.md'
                    

                const colStyle = {
                    padding: 10
                }

                const docStyle = {
                    margin: 10,
                    background: 'white'
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {
                            page: 'demo'
                        }
                        document.title = '输入框'
                    }

                    handlePageChange(value) {
                        this.setState({
                            page: value
                        })
                    }

                    render() {
                        let Content = null

                        switch (this.state.page) {
                        case 'demo':
                            Content = (
                                <Row>
                                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={BasicMarkdown}
                                      code={BasicCode}>

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DefaultMarkdown}
                                      code={DefaultCode}>

                                    <DefaultComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CallbackMarkdown}
                                      code={CallbackCode}>

                                    <CallbackComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DisabledMarkdown}
                                      code={DisabledCode}>

                                    <DisabledComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={FlexMarkdown}
                                      code={FlexCode}>

                                    <FlexComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={IconMarkdown}
                                      code={IconCode}>

                                    <IconComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={TextareaMarkdown}
                                      code={TextareaCode}>

                                    <TextareaComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ClearMarkdown}
                                      code={ClearCode}>

                                    <ClearComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={InputSourceCode} instance={InputSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <div className="_namespace">
                                <Layout>
                                    <Section>
                                        <Title>{readme}</Title>
                                        <ScrollListenBox store={store}>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width={120}>
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-input/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                