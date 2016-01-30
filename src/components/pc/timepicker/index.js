
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Tabs, TabPanel } from 'fit-tabs'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/timepicker/readme.md'
                import '../../../../lib/pc/timepicker/demo'

                
                        import TimepickerSource from '../../../../lib/pc/timepicker/src/timepicker'
                        import TimepickerSourceCode from 'text!../../../../lib/pc/timepicker/src/timepicker'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/timepicker/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/timepicker/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/timepicker/demo/lists/basic.md'
                    
                    import LabelComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/timepicker/demo/lists/label.js'
                    import LabelCode from 'text!../../../../lib/pc/timepicker/demo/lists/label.js'
                    import LabelMarkdown from '../../../../lib/pc/timepicker/demo/lists/label.md'
                    
                    import LimitComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/timepicker/demo/lists/limit.js'
                    import LimitCode from 'text!../../../../lib/pc/timepicker/demo/lists/limit.js'
                    import LimitMarkdown from '../../../../lib/pc/timepicker/demo/lists/limit.md'
                    

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
                        this.state = {}
                        document.title = '时间选择器'
                    }

                    render() {
                        return (
                            <div className="_namespace">
                                <Title>{readme}</Title>

                                <Tabs defaultActiveKey="1">
                                    <TabPanel tab="演示"
                                              key="1">
                                    <Row>
                                        
                    <Col span="24" style={colStyle}>
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <BasicComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={LabelMarkdown} code={LabelCode}>
                            <LabelComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={LimitMarkdown} code={LimitCode}>
                            <LimitComponent/>
                        </CodeView>
                    </Col>
                    
                                    </Row>
                                </TabPanel>
                                <TabPanel tab="文档"
                                          key="2">
                                    
                        <div style={docStyle}>
                            <CodeDoc code={TimepickerSourceCode} instance={TimepickerSource} />
                        </div>
                        
                                    </TabPanel>
                                </Tabs>
                            </div>
                        )
                    }
                }
                