import {
  Rule,
  SchematicsException,
  apply,
  Tree,
  SchematicContext,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  template,
  url
} from '@angular-devkit/schematics';
import * as stringUtils from '../../string';


function buildSelector(options : any) {
  let selector = stringUtils.dasherize(options.name);
  if (options.prefix) {
    selector = `${options.prefix}-${selector}`;
  }

  return selector;
}
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngrx(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    options.selector = options.selector || buildSelector(options);
    const sourceDir = options.dir;
    console.log(sourceDir);
    if (!sourceDir) {
      throw new SchematicsException(`sourceDir option is required.`);
    }

    const templateSource = apply(url('../../../template/ngrx'), [
      template({
        ...stringUtils,
        ...options
      }),
      move(sourceDir)
    ]);


    return chain([branchAndMerge(chain([mergeWith(templateSource)]))])(tree, _context);
  };
}
