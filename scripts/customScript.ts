import fs from 'fs';
import mkdirp from 'mkdirp';

const file = process.argv.slice(2)[0];

const customScript = ({
  path,
  dir,
}: Record<string, string>): void => {
  const content = fs.readFileSync(file, 'utf8');
  const someContent = 'hello\n' + content;
  mkdirp(`${path}/${dir}`, (err: NodeJS.ErrnoException) => {
    // eslint-disable-next-line no-console
    if (err) console.error(err);
  });
  fs.writeFileSync('test.txt', someContent);
};

export default customScript;
