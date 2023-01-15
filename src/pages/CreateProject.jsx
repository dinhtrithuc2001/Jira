import React, {useRef} from 'react';
import { Button, Form, Input, Breadcrumb, Select } from 'antd';
import { Editor } from '@tinymce/tinymce-react';


const { Option } = Select;

export default function CreateProject() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const editorRef = useRef(null);

    const handleEditorChange = () => {
        if (editorRef.current) {
          console.log(editorRef.current.getContent());
        }
      };
    return (
        <div className='container'>
            <Breadcrumb className='font-medium' style={{ fontSize: 15, color: '#5e6c84' }}>
                <Breadcrumb.Item>Projects</Breadcrumb.Item>
                <Breadcrumb.Item>React Jira Clone</Breadcrumb.Item>
                <Breadcrumb.Item>Create Project</Breadcrumb.Item>
            </Breadcrumb>
            <h2 className='my-3 font-medium text-2xl'>Create Project</h2>
            <Form
                name="Craete Project"
                className='mt-[3rem]'
                wrapperCol={{
                    span: 16,
                }}

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <p className='p-0 mb-1 font-medium text-[#434242fb]'>Name</p>
                <Form.Item
                    name="projectName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your projectName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <p className='p-0 mb-1 font-medium text-[#434242fb]'>Description</p>
                <Form.Item
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your description!',
                        },
                    ]}
                >
                    <>
                        <Editor
                            apiKey='9stlvqkpgdrjlmf66aj4njd1xxripg9pchrn5e520ozhwwvv'
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue=""
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar: 'undo redo | blocks | ' +
                                    'bold italic forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            onEditorChange={handleEditorChange}
                        />
                    </>
                </Form.Item>
                <p className='p-0 mb-1 font-medium text-[#434242fb]'>Category</p>
                <Form.Item
                    name="categoryId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        // onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">Software</Option>
                        <Option value="female">Web</Option>
                        <Option value="other">App</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 0,
                        span: 4,
                    }}
                    className='mt-[2rem]'
                >
                    <Button className='w-full bg-[#4096ff] tracking-wide font-medium' type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
