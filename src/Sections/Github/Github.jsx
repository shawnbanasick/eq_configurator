import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import appState from "../../GlobalState/appState";
import githubNewRepo from "../../assets/images/github-new-repo.png";
import githubRepoName from "../../assets/images/github-repo-name.png";
import githubAddReadme from "../../assets/images/github-add-readme.png";
import githubNewRepoView from "../../assets/images/github-new-repo-view.png";
import githubAddFile from "../../assets/images/github-add-file.png";
import githubFileUploading from "../../assets/images/github-file-uploading.png";
import githubCommitUploads from "../../assets/images/github-commit-uploads.png";
import githubSettings from "../../assets/images/github-settings.png";
import githubSetPages from "../../assets/images/github-set-pages.png";
import githubSavePagesSettings from "../../assets/images/github-save-pages-setting.png";
import githubPagesUrl from "../../assets/images/github-pages-url.png";
import github404 from "../../assets/images/github-404.png";

const Server = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Upload Your Files to the Web</Title>

      <DisplayModeText>
        The next step is to <strong>upload</strong> your files to a web server.
        There are a number of choices. Here I recommend either{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/">
          Github
        </a>{" "}
        or{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netlify.com/"
        >
          Netlify
        </a>
        .
      </DisplayModeText>
      <SpacerDiv20 />
      <SpacerDiv20 />
      <Title2>Option 1 - Upload to Github</Title2>
      <DisplayModeText>
        <b>1a.</b>
        <br />
        You will need a Github user account, so to to{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/">
          Github
        </a>{" "}
        and make one. <b>**Important**</b> - the name of your account will be in
        the url of your project, so choose your account name carefully.
        <br />
        <br />
        Navigate to your main Github account page and click "Repositories" and
        "New".
      </DisplayModeText>
      <SpacerDiv20 />
      <img src={githubNewRepo} width="90%" alt="a" />
      <SpacerDiv20 />
      <DisplayModeText>
        <b>1b.</b>
        <br />
        Input a name for your project.
      </DisplayModeText>
      <SpacerDiv50 />
      <img src={githubRepoName} alt="a" />
      <SpacerDiv20 />
      <DisplayModeText>
        <b>1c.</b>
        <br />
        Click "Add a Readme file", and then click the green "Create repository"
        button.
      </DisplayModeText>
      <SpacerDiv20 />
      <img src={githubAddReadme} alt="a" />
      <SpacerDiv20 />
      <DisplayModeText>
        <b>1d.</b>
        <br />
        You will now have a new empty repository that looks like this image.
        <SpacerDiv20 />
      </DisplayModeText>
      <img src={githubNewRepoView} alt="a" />
      <SpacerDiv20 />
      <DisplayModeText>
        <b>1e.</b>
        <br />
        The next step is to upload your files to the repository. Click on "Add
        file", and "Upload files".
      </DisplayModeText>
      <SpacerDiv20 />
      <SpacerDiv20 />
      <img src={githubAddFile} alt="a" />
      <SpacerDiv20 />
      <DisplayModeText>
        <b>1f.</b>
        <br />
        Drag-and-drop or choose your configured Easy HTMLQ files. You can see
        the upload progress below the drop zone.
      </DisplayModeText>
      <img src={githubFileUploading} alt="a" />
      <SpacerDiv20 />
      <DisplayModeText>
        <b>1g.</b>
        <br />
        Once all the files have uploaded, scroll to the bottom of the page and
        click the "Commit changes" button.
      </DisplayModeText>
      <SpacerDiv20 />
      <img src={githubCommitUploads} alt="a" />
      <SpacerDiv20 />
      <DisplayModeText>
        <b>1h.</b>
        <br />
        Back on the main page of your repository, click "Settings".
      </DisplayModeText>
      <SpacerDiv20 />
      <img src={githubSettings} alt="a" />
      <SpacerDiv20 />
      <SpacerDiv20 />
      <DisplayModeText>
        <b>1i.</b>
        <br />
        Scroll down the page to find the "Github Pages" section. Click "None"
        and "Main".
      </DisplayModeText>
      <img src={githubSetPages} alt="a" />
      <SpacerDiv20 />
      <SpacerDiv20 />
      <DisplayModeText>
        <b>1j.</b>
        <br />
        Click "Save".
      </DisplayModeText>
      <SpacerDiv20 />
      <img src={githubSavePagesSettings} alt="a" />
      <SpacerDiv20 />
      <DisplayModeText>
        <b>1k.</b>
        <br />
        The page will reload. Scroll down the page to find the "Github Pages"
        section again. The url for your project will be listed there.
      </DisplayModeText>
      <SpacerDiv20 />
      <img src={githubPagesUrl} alt="a" />
      <SpacerDiv20 />
      <DisplayModeText>
        <b>1l.</b>
        <br />
        If you click on your project url immediately you will get a 404 error.
        This is because it takes some time for the Github servers to put your
        site on the web. Wait about 30 minutes - 1 hour and check again and your
        page should be live on the web.
      </DisplayModeText>
      <SpacerDiv20 />
      <img src={github404} alt="a" />
      <SpacerDiv50 />
    </MainContent>
  );
};

export default view(Server);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const MainContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  width: calc(100vw - 137px);
  box-sizing: border-box;
  max-height: calc(100vh - 3px);
  overflow: auto;
  user-select: none;

  a {
    padding-bottom: 1px;
    text-decoration: none;
    color: #000;
    box-shadow: inset 0 -4px 0 var(--second-theme-color);
    transition: background-color 0.25s ease-out;
    margin-left: 5px;
  }

  a:hover {
    background-color: var(--second-theme-color);
    padding-top: 2px;
    box-shadow: none;
  }

  img {
    max-width: 1000px;
  }
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 5vw;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;

const IntroText = styled.span`
  font-size: 2vw;
  align-self: center;
  width: 70vw;
  padding: 15px;
  /* border: 2px solid red; */
`;

const SpacerDiv20 = styled.div`
  margin-bottom: 20px;
`;

const Title2 = styled.h1`
  margin-left: 10px;
  font-size: 35px;
  width: 70vw;
`;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-top: 40px;
  width: 78vw;
  max-width: 1200px;
  font-size: 20px;
  padding: 0 10px 0 10px;
  border: 2px solid black;
`;

const SpacerDiv50 = styled.div`
  margin-bottom: 50px;
`;
