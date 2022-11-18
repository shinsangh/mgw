import { Amplify } from "aws-amplify";
import React from 'react';
import { withAuthenticator,Button,Heading,View,Image,Text, useTheme, Authenticator, CheckboxField, useAuthenticator } from "@aws-amplify/ui-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Main from "./main/main";
import MainTable from "./MainTable.tsx";
import Nav from "./nav/nav";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";
import '@aws-amplify/ui-react/styles.css';
import "./css/App.css";
// import { SetUIVocabularies } from './UIVocabularies.ts';
import awsExports from "./aws-exports";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Notice from "./MainTable.tsx";
Amplify.configure(awsExports);
// SetUIVocabularies(('ja'));


const components = {
  Header() {
    return (
      <Header/>
    );
  },

  Footer() {
    return (
      <Footer/>
    );
  },

  SignIn: {
    Header() {
      return (
        <SignInHeader/>
      );
    },
    Footer() {
      return (
        <SignInFooter/>
      );
    },
  },

  SignUp: {
    Header() {

    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
        </Heading>
      );
    },
    Footer() {
      
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  
};

const formFields = {
  signIn: {
  },
  signUp: {
    email: {
      isRequired: true,
      order:1
    },    
    password: {
      isRequired: true,
      order: 2
    },
    confirm_password: {
      isRequired: true,
      order: 3
    },
    family_name: {
      isRequired: true,
      order: 4,
      placeholder: '性'
    },
    name: {
      isRequired: true,
      order: 5,
      placeholder: '名'
    },
    birthdate: {
      order: 6,
      placeholder: '生年月日'
    },
    
  },
};



export default function App() {
  return (
    <appmain>
      <Authenticator formFields={formFields} components={components}>
        <Router>
          <div className="App">
                
                  <MainTable />
                  
          </div>
        </Router>
      </Authenticator>
    </appmain>
  );
}