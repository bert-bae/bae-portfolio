import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./App.css";

import { theme } from "./theme";
import PageHeader from "./components/page-header";
import TagList, { TagProps } from "./components/tag-list";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
  },
});

const tags: TagProps[] = [
  {
    label: "React",
  },
  {
    label: "NodeJS",
  },
  {
    label: "Typescript",
  },
  {
    label: "AWS",
  },
];

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root} component="div">
        <CssBaseline />
        <PageHeader
          image={
            "https://cdn-images-1.medium.com/max/1200/1*YRINRZFr0E1FRJ4JpizEMw.jpeg"
          }
          title="Elbert Bae | Developer"
        >
          <TagList tags={tags} />
        </PageHeader>
      </Box>
    </ThemeProvider>
  );
}

export default App;
