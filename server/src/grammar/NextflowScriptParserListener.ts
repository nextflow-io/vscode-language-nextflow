// Generated from src/grammar/NextflowScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT





package groovy.parser;


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IdentifierPrmrAltContext } from "./NextflowScriptParser";
import { LiteralPrmrAltContext } from "./NextflowScriptParser";
import { GstringPrmrAltContext } from "./NextflowScriptParser";
import { NewPrmrAltContext } from "./NextflowScriptParser";
import { ThisPrmrAltContext } from "./NextflowScriptParser";
import { SuperPrmrAltContext } from "./NextflowScriptParser";
import { ParenPrmrAltContext } from "./NextflowScriptParser";
import { ClosureOrLambdaExpressionPrmrAltContext } from "./NextflowScriptParser";
import { ListPrmrAltContext } from "./NextflowScriptParser";
import { MapPrmrAltContext } from "./NextflowScriptParser";
import { BuiltInTypePrmrAltContext } from "./NextflowScriptParser";
import { IntegerLiteralAltContext } from "./NextflowScriptParser";
import { FloatingPointLiteralAltContext } from "./NextflowScriptParser";
import { StringLiteralAltContext } from "./NextflowScriptParser";
import { BooleanLiteralAltContext } from "./NextflowScriptParser";
import { NullLiteralAltContext } from "./NextflowScriptParser";
import { CastExprAltContext } from "./NextflowScriptParser";
import { PostfixExprAltContext } from "./NextflowScriptParser";
import { SwitchExprAltContext } from "./NextflowScriptParser";
import { UnaryNotExprAltContext } from "./NextflowScriptParser";
import { PowerExprAltContext } from "./NextflowScriptParser";
import { UnaryAddExprAltContext } from "./NextflowScriptParser";
import { MultiplicativeExprAltContext } from "./NextflowScriptParser";
import { AdditiveExprAltContext } from "./NextflowScriptParser";
import { ShiftExprAltContext } from "./NextflowScriptParser";
import { RelationalExprAltContext } from "./NextflowScriptParser";
import { EqualityExprAltContext } from "./NextflowScriptParser";
import { RegexExprAltContext } from "./NextflowScriptParser";
import { AndExprAltContext } from "./NextflowScriptParser";
import { ExclusiveOrExprAltContext } from "./NextflowScriptParser";
import { InclusiveOrExprAltContext } from "./NextflowScriptParser";
import { LogicalAndExprAltContext } from "./NextflowScriptParser";
import { LogicalOrExprAltContext } from "./NextflowScriptParser";
import { ConditionalExprAltContext } from "./NextflowScriptParser";
import { MultipleAssignmentExprAltContext } from "./NextflowScriptParser";
import { AssignmentExprAltContext } from "./NextflowScriptParser";
import { BlockStmtAltContext } from "./NextflowScriptParser";
import { ConditionalStmtAltContext } from "./NextflowScriptParser";
import { LoopStmtAltContext } from "./NextflowScriptParser";
import { TryCatchStmtAltContext } from "./NextflowScriptParser";
import { SynchronizedStmtAltContext } from "./NextflowScriptParser";
import { ReturnStmtAltContext } from "./NextflowScriptParser";
import { ThrowStmtAltContext } from "./NextflowScriptParser";
import { BreakStmtAltContext } from "./NextflowScriptParser";
import { ContinueStmtAltContext } from "./NextflowScriptParser";
import { YieldStmtAltContext } from "./NextflowScriptParser";
import { LabeledStmtAltContext } from "./NextflowScriptParser";
import { AssertStmtAltContext } from "./NextflowScriptParser";
import { LocalVariableDeclarationStmtAltContext } from "./NextflowScriptParser";
import { ExpressionStmtAltContext } from "./NextflowScriptParser";
import { EmptyStmtAltContext } from "./NextflowScriptParser";
import { CommandExprAltContext } from "./NextflowScriptParser";
import { ForStmtAltContext } from "./NextflowScriptParser";
import { WhileStmtAltContext } from "./NextflowScriptParser";
import { DoWhileStmtAltContext } from "./NextflowScriptParser";
import { CompilationUnitContext } from "./NextflowScriptParser";
import { ScriptStatementContext } from "./NextflowScriptParser";
import { IncludeStatementContext } from "./NextflowScriptParser";
import { IncludeNamesContext } from "./NextflowScriptParser";
import { IncludeNameContext } from "./NextflowScriptParser";
import { ProcessDefContext } from "./NextflowScriptParser";
import { ProcessStatementContext } from "./NextflowScriptParser";
import { ProcessDirectiveContext } from "./NextflowScriptParser";
import { ProcessInputContext } from "./NextflowScriptParser";
import { ProcessInputTypeContext } from "./NextflowScriptParser";
import { ProcessInputValContext } from "./NextflowScriptParser";
import { ProcessInputEnvContext } from "./NextflowScriptParser";
import { ProcessInputFileContext } from "./NextflowScriptParser";
import { ProcessInputPathContext } from "./NextflowScriptParser";
import { ProcessInputStdinContext } from "./NextflowScriptParser";
import { ProcessInputExprContext } from "./NextflowScriptParser";
import { ProcessInputTupleContext } from "./NextflowScriptParser";
import { ProcessOutputContext } from "./NextflowScriptParser";
import { ProcessOutputTypeContext } from "./NextflowScriptParser";
import { ProcessOutputValContext } from "./NextflowScriptParser";
import { ProcessOutputEnvContext } from "./NextflowScriptParser";
import { ProcessOutputFileContext } from "./NextflowScriptParser";
import { ProcessOutputPathContext } from "./NextflowScriptParser";
import { ProcessOutputStdoutContext } from "./NextflowScriptParser";
import { ProcessOutputExprContext } from "./NextflowScriptParser";
import { ProcessOutputTupleContext } from "./NextflowScriptParser";
import { WorkflowDefContext } from "./NextflowScriptParser";
import { WorkflowBodyContext } from "./NextflowScriptParser";
import { ScriptStatementsContext } from "./NextflowScriptParser";
import { PackageDeclarationContext } from "./NextflowScriptParser";
import { ImportDeclarationContext } from "./NextflowScriptParser";
import { TypeDeclarationContext } from "./NextflowScriptParser";
import { ModifierContext } from "./NextflowScriptParser";
import { ModifiersOptContext } from "./NextflowScriptParser";
import { ModifiersContext } from "./NextflowScriptParser";
import { ClassOrInterfaceModifiersOptContext } from "./NextflowScriptParser";
import { ClassOrInterfaceModifiersContext } from "./NextflowScriptParser";
import { ClassOrInterfaceModifierContext } from "./NextflowScriptParser";
import { VariableModifierContext } from "./NextflowScriptParser";
import { VariableModifiersOptContext } from "./NextflowScriptParser";
import { VariableModifiersContext } from "./NextflowScriptParser";
import { TypeParametersContext } from "./NextflowScriptParser";
import { TypeParameterContext } from "./NextflowScriptParser";
import { TypeBoundContext } from "./NextflowScriptParser";
import { TypeListContext } from "./NextflowScriptParser";
import { ClassDeclarationContext } from "./NextflowScriptParser";
import { ClassBodyContext } from "./NextflowScriptParser";
import { EnumConstantsContext } from "./NextflowScriptParser";
import { EnumConstantContext } from "./NextflowScriptParser";
import { ClassBodyDeclarationContext } from "./NextflowScriptParser";
import { MemberDeclarationContext } from "./NextflowScriptParser";
import { MethodDeclarationContext } from "./NextflowScriptParser";
import { CompactConstructorDeclarationContext } from "./NextflowScriptParser";
import { MethodNameContext } from "./NextflowScriptParser";
import { ReturnTypeContext } from "./NextflowScriptParser";
import { FieldDeclarationContext } from "./NextflowScriptParser";
import { VariableDeclaratorsContext } from "./NextflowScriptParser";
import { VariableDeclaratorContext } from "./NextflowScriptParser";
import { VariableDeclaratorIdContext } from "./NextflowScriptParser";
import { VariableInitializerContext } from "./NextflowScriptParser";
import { VariableInitializersContext } from "./NextflowScriptParser";
import { EmptyDimsContext } from "./NextflowScriptParser";
import { EmptyDimsOptContext } from "./NextflowScriptParser";
import { TypeContext } from "./NextflowScriptParser";
import { ClassOrInterfaceTypeContext } from "./NextflowScriptParser";
import { PrimitiveTypeContext } from "./NextflowScriptParser";
import { TypeArgumentsContext } from "./NextflowScriptParser";
import { TypeArgumentContext } from "./NextflowScriptParser";
import { AnnotatedQualifiedClassNameContext } from "./NextflowScriptParser";
import { QualifiedClassNameListContext } from "./NextflowScriptParser";
import { FormalParametersContext } from "./NextflowScriptParser";
import { FormalParameterListContext } from "./NextflowScriptParser";
import { ThisFormalParameterContext } from "./NextflowScriptParser";
import { FormalParameterContext } from "./NextflowScriptParser";
import { MethodBodyContext } from "./NextflowScriptParser";
import { QualifiedNameContext } from "./NextflowScriptParser";
import { QualifiedNameElementContext } from "./NextflowScriptParser";
import { QualifiedNameElementsContext } from "./NextflowScriptParser";
import { QualifiedClassNameContext } from "./NextflowScriptParser";
import { QualifiedStandardClassNameContext } from "./NextflowScriptParser";
import { LiteralContext } from "./NextflowScriptParser";
import { GstringContext } from "./NextflowScriptParser";
import { GstringValueContext } from "./NextflowScriptParser";
import { GstringPathContext } from "./NextflowScriptParser";
import { StandardLambdaExpressionContext } from "./NextflowScriptParser";
import { StandardLambdaParametersContext } from "./NextflowScriptParser";
import { LambdaBodyContext } from "./NextflowScriptParser";
import { ClosureContext } from "./NextflowScriptParser";
import { ClosureOrLambdaExpressionContext } from "./NextflowScriptParser";
import { BlockStatementsOptContext } from "./NextflowScriptParser";
import { BlockStatementsContext } from "./NextflowScriptParser";
import { AnnotationsOptContext } from "./NextflowScriptParser";
import { AnnotationContext } from "./NextflowScriptParser";
import { ElementValuesContext } from "./NextflowScriptParser";
import { AnnotationNameContext } from "./NextflowScriptParser";
import { ElementValuePairsContext } from "./NextflowScriptParser";
import { ElementValuePairContext } from "./NextflowScriptParser";
import { ElementValuePairNameContext } from "./NextflowScriptParser";
import { ElementValueContext } from "./NextflowScriptParser";
import { ElementValueArrayInitializerContext } from "./NextflowScriptParser";
import { BlockContext } from "./NextflowScriptParser";
import { BlockStatementContext } from "./NextflowScriptParser";
import { LocalVariableDeclarationContext } from "./NextflowScriptParser";
import { VariableDeclarationContext } from "./NextflowScriptParser";
import { TypeNamePairsContext } from "./NextflowScriptParser";
import { TypeNamePairContext } from "./NextflowScriptParser";
import { VariableNamesContext } from "./NextflowScriptParser";
import { ConditionalStatementContext } from "./NextflowScriptParser";
import { IfElseStatementContext } from "./NextflowScriptParser";
import { SwitchStatementContext } from "./NextflowScriptParser";
import { LoopStatementContext } from "./NextflowScriptParser";
import { ContinueStatementContext } from "./NextflowScriptParser";
import { BreakStatementContext } from "./NextflowScriptParser";
import { YieldStatementContext } from "./NextflowScriptParser";
import { TryCatchStatementContext } from "./NextflowScriptParser";
import { AssertStatementContext } from "./NextflowScriptParser";
import { StatementContext } from "./NextflowScriptParser";
import { CatchClauseContext } from "./NextflowScriptParser";
import { CatchTypeContext } from "./NextflowScriptParser";
import { FinallyBlockContext } from "./NextflowScriptParser";
import { ResourcesContext } from "./NextflowScriptParser";
import { ResourceListContext } from "./NextflowScriptParser";
import { ResourceContext } from "./NextflowScriptParser";
import { SwitchBlockStatementGroupContext } from "./NextflowScriptParser";
import { SwitchLabelContext } from "./NextflowScriptParser";
import { ForControlContext } from "./NextflowScriptParser";
import { EnhancedForControlContext } from "./NextflowScriptParser";
import { ClassicalForControlContext } from "./NextflowScriptParser";
import { ForInitContext } from "./NextflowScriptParser";
import { ForUpdateContext } from "./NextflowScriptParser";
import { CastParExpressionContext } from "./NextflowScriptParser";
import { ParExpressionContext } from "./NextflowScriptParser";
import { ExpressionInParContext } from "./NextflowScriptParser";
import { ExpressionListContext } from "./NextflowScriptParser";
import { ExpressionListElementContext } from "./NextflowScriptParser";
import { EnhancedStatementExpressionContext } from "./NextflowScriptParser";
import { StatementExpressionContext } from "./NextflowScriptParser";
import { PostfixExpressionContext } from "./NextflowScriptParser";
import { SwitchExpressionContext } from "./NextflowScriptParser";
import { SwitchBlockStatementExpressionGroupContext } from "./NextflowScriptParser";
import { SwitchExpressionLabelContext } from "./NextflowScriptParser";
import { ExpressionContext } from "./NextflowScriptParser";
import { CommandExpressionContext } from "./NextflowScriptParser";
import { CommandArgumentContext } from "./NextflowScriptParser";
import { PathExpressionContext } from "./NextflowScriptParser";
import { PathElementContext } from "./NextflowScriptParser";
import { NamePartContext } from "./NextflowScriptParser";
import { DynamicMemberNameContext } from "./NextflowScriptParser";
import { IndexPropertyArgsContext } from "./NextflowScriptParser";
import { NamedPropertyArgsContext } from "./NextflowScriptParser";
import { PrimaryContext } from "./NextflowScriptParser";
import { ListContext } from "./NextflowScriptParser";
import { MapContext } from "./NextflowScriptParser";
import { MapEntryListContext } from "./NextflowScriptParser";
import { MapEntryContext } from "./NextflowScriptParser";
import { MapEntryLabelContext } from "./NextflowScriptParser";
import { CreatorContext } from "./NextflowScriptParser";
import { DimContext } from "./NextflowScriptParser";
import { ArrayInitializerContext } from "./NextflowScriptParser";
import { AnonymousInnerClassDeclarationContext } from "./NextflowScriptParser";
import { CreatedNameContext } from "./NextflowScriptParser";
import { NonWildcardTypeArgumentsContext } from "./NextflowScriptParser";
import { TypeArgumentsOrDiamondContext } from "./NextflowScriptParser";
import { ArgumentsContext } from "./NextflowScriptParser";
import { EnhancedArgumentListInParContext } from "./NextflowScriptParser";
import { EnhancedArgumentListElementContext } from "./NextflowScriptParser";
import { StringLiteralContext } from "./NextflowScriptParser";
import { ClassNameContext } from "./NextflowScriptParser";
import { IdentifierContext } from "./NextflowScriptParser";
import { BuiltInTypeContext } from "./NextflowScriptParser";
import { KeywordsContext } from "./NextflowScriptParser";
import { RparenContext } from "./NextflowScriptParser";
import { NlsContext } from "./NextflowScriptParser";
import { SepContext } from "./NextflowScriptParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `NextflowScriptParser`.
 */
export interface NextflowScriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `identifierPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	enterIdentifierPrmrAlt?: (ctx: IdentifierPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	exitIdentifierPrmrAlt?: (ctx: IdentifierPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `literalPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	enterLiteralPrmrAlt?: (ctx: LiteralPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `literalPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	exitLiteralPrmrAlt?: (ctx: LiteralPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `gstringPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	enterGstringPrmrAlt?: (ctx: GstringPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `gstringPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	exitGstringPrmrAlt?: (ctx: GstringPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `newPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	enterNewPrmrAlt?: (ctx: NewPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `newPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	exitNewPrmrAlt?: (ctx: NewPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `thisPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	enterThisPrmrAlt?: (ctx: ThisPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `thisPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	exitThisPrmrAlt?: (ctx: ThisPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `superPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	enterSuperPrmrAlt?: (ctx: SuperPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `superPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	exitSuperPrmrAlt?: (ctx: SuperPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `parenPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 */
	enterParenPrmrAlt?: (ctx: ParenPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `parenPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 */
	exitParenPrmrAlt?: (ctx: ParenPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `closureOrLambdaExpressionPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	enterClosureOrLambdaExpressionPrmrAlt?: (ctx: ClosureOrLambdaExpressionPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `closureOrLambdaExpressionPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	exitClosureOrLambdaExpressionPrmrAlt?: (ctx: ClosureOrLambdaExpressionPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `listPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	enterListPrmrAlt?: (ctx: ListPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `listPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	exitListPrmrAlt?: (ctx: ListPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `mapPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	enterMapPrmrAlt?: (ctx: MapPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `mapPrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	exitMapPrmrAlt?: (ctx: MapPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `builtInTypePrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	enterBuiltInTypePrmrAlt?: (ctx: BuiltInTypePrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `builtInTypePrmrAlt`
	 * labeled alternative in `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	exitBuiltInTypePrmrAlt?: (ctx: BuiltInTypePrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `integerLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteralAlt?: (ctx: IntegerLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteralAlt?: (ctx: IntegerLiteralAltContext) => void;

	/**
	 * Enter a parse tree produced by the `floatingPointLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterFloatingPointLiteralAlt?: (ctx: FloatingPointLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `floatingPointLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitFloatingPointLiteralAlt?: (ctx: FloatingPointLiteralAltContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStringLiteralAlt?: (ctx: StringLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStringLiteralAlt?: (ctx: StringLiteralAltContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteralAlt?: (ctx: BooleanLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteralAlt?: (ctx: BooleanLiteralAltContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNullLiteralAlt?: (ctx: NullLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteralAlt`
	 * labeled alternative in `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNullLiteralAlt?: (ctx: NullLiteralAltContext) => void;

	/**
	 * Enter a parse tree produced by the `castExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExprAlt?: (ctx: CastExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `castExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExprAlt?: (ctx: CastExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `postfixExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExprAlt?: (ctx: PostfixExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `postfixExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExprAlt?: (ctx: PostfixExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `switchExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSwitchExprAlt?: (ctx: SwitchExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `switchExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSwitchExprAlt?: (ctx: SwitchExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryNotExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryNotExprAlt?: (ctx: UnaryNotExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryNotExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryNotExprAlt?: (ctx: UnaryNotExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `powerExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPowerExprAlt?: (ctx: PowerExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `powerExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPowerExprAlt?: (ctx: PowerExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryAddExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryAddExprAlt?: (ctx: UnaryAddExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryAddExprAlt`
	 * labeled alternative in `NextflowScriptParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryAddExprAlt?: (ctx: UnaryAddExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `multiplicativeExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExprAlt?: (ctx: MultiplicativeExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplicativeExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExprAlt?: (ctx: MultiplicativeExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `additiveExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExprAlt?: (ctx: AdditiveExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `additiveExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExprAlt?: (ctx: AdditiveExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `shiftExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterShiftExprAlt?: (ctx: ShiftExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `shiftExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitShiftExprAlt?: (ctx: ShiftExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `relationalExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExprAlt?: (ctx: RelationalExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `relationalExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExprAlt?: (ctx: RelationalExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `equalityExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExprAlt?: (ctx: EqualityExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExprAlt?: (ctx: EqualityExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `regexExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRegexExprAlt?: (ctx: RegexExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `regexExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRegexExprAlt?: (ctx: RegexExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `andExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExprAlt?: (ctx: AndExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `andExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExprAlt?: (ctx: AndExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `exclusiveOrExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExclusiveOrExprAlt?: (ctx: ExclusiveOrExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `exclusiveOrExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExclusiveOrExprAlt?: (ctx: ExclusiveOrExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `inclusiveOrExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInclusiveOrExprAlt?: (ctx: InclusiveOrExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `inclusiveOrExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInclusiveOrExprAlt?: (ctx: InclusiveOrExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalAndExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExprAlt?: (ctx: LogicalAndExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalAndExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExprAlt?: (ctx: LogicalAndExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalOrExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExprAlt?: (ctx: LogicalOrExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalOrExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExprAlt?: (ctx: LogicalOrExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `conditionalExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExprAlt?: (ctx: ConditionalExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionalExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExprAlt?: (ctx: ConditionalExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `multipleAssignmentExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultipleAssignmentExprAlt?: (ctx: MultipleAssignmentExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `multipleAssignmentExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultipleAssignmentExprAlt?: (ctx: MultipleAssignmentExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `assignmentExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExprAlt?: (ctx: AssignmentExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `assignmentExprAlt`
	 * labeled alternative in `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExprAlt?: (ctx: AssignmentExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `blockStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterBlockStmtAlt?: (ctx: BlockStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `blockStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitBlockStmtAlt?: (ctx: BlockStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `conditionalStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterConditionalStmtAlt?: (ctx: ConditionalStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionalStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitConditionalStmtAlt?: (ctx: ConditionalStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `loopStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLoopStmtAlt?: (ctx: LoopStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `loopStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLoopStmtAlt?: (ctx: LoopStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `tryCatchStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTryCatchStmtAlt?: (ctx: TryCatchStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `tryCatchStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTryCatchStmtAlt?: (ctx: TryCatchStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `synchronizedStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSynchronizedStmtAlt?: (ctx: SynchronizedStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `synchronizedStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSynchronizedStmtAlt?: (ctx: SynchronizedStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `returnStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterReturnStmtAlt?: (ctx: ReturnStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `returnStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitReturnStmtAlt?: (ctx: ReturnStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `throwStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterThrowStmtAlt?: (ctx: ThrowStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `throwStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitThrowStmtAlt?: (ctx: ThrowStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `breakStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterBreakStmtAlt?: (ctx: BreakStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `breakStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitBreakStmtAlt?: (ctx: BreakStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `continueStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterContinueStmtAlt?: (ctx: ContinueStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `continueStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitContinueStmtAlt?: (ctx: ContinueStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `yieldStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterYieldStmtAlt?: (ctx: YieldStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `yieldStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitYieldStmtAlt?: (ctx: YieldStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `labeledStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLabeledStmtAlt?: (ctx: LabeledStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `labeledStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLabeledStmtAlt?: (ctx: LabeledStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `assertStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAssertStmtAlt?: (ctx: AssertStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `assertStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAssertStmtAlt?: (ctx: AssertStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `localVariableDeclarationStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclarationStmtAlt?: (ctx: LocalVariableDeclarationStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `localVariableDeclarationStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclarationStmtAlt?: (ctx: LocalVariableDeclarationStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStmtAlt?: (ctx: ExpressionStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStmtAlt?: (ctx: ExpressionStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `emptyStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStmtAlt?: (ctx: EmptyStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `emptyStmtAlt`
	 * labeled alternative in `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStmtAlt?: (ctx: EmptyStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `commandExprAlt`
	 * labeled alternative in `NextflowScriptParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	enterCommandExprAlt?: (ctx: CommandExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `commandExprAlt`
	 * labeled alternative in `NextflowScriptParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	exitCommandExprAlt?: (ctx: CommandExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `forStmtAlt`
	 * labeled alternative in `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterForStmtAlt?: (ctx: ForStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `forStmtAlt`
	 * labeled alternative in `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitForStmtAlt?: (ctx: ForStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `whileStmtAlt`
	 * labeled alternative in `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStmtAlt?: (ctx: WhileStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `whileStmtAlt`
	 * labeled alternative in `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStmtAlt?: (ctx: WhileStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `doWhileStmtAlt`
	 * labeled alternative in `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterDoWhileStmtAlt?: (ctx: DoWhileStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `doWhileStmtAlt`
	 * labeled alternative in `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitDoWhileStmtAlt?: (ctx: DoWhileStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.scriptStatement`.
	 * @param ctx the parse tree
	 */
	enterScriptStatement?: (ctx: ScriptStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.scriptStatement`.
	 * @param ctx the parse tree
	 */
	exitScriptStatement?: (ctx: ScriptStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.includeStatement`.
	 * @param ctx the parse tree
	 */
	enterIncludeStatement?: (ctx: IncludeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.includeStatement`.
	 * @param ctx the parse tree
	 */
	exitIncludeStatement?: (ctx: IncludeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.includeNames`.
	 * @param ctx the parse tree
	 */
	enterIncludeNames?: (ctx: IncludeNamesContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.includeNames`.
	 * @param ctx the parse tree
	 */
	exitIncludeNames?: (ctx: IncludeNamesContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.includeName`.
	 * @param ctx the parse tree
	 */
	enterIncludeName?: (ctx: IncludeNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.includeName`.
	 * @param ctx the parse tree
	 */
	exitIncludeName?: (ctx: IncludeNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processDef`.
	 * @param ctx the parse tree
	 */
	enterProcessDef?: (ctx: ProcessDefContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processDef`.
	 * @param ctx the parse tree
	 */
	exitProcessDef?: (ctx: ProcessDefContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processStatement`.
	 * @param ctx the parse tree
	 */
	enterProcessStatement?: (ctx: ProcessStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processStatement`.
	 * @param ctx the parse tree
	 */
	exitProcessStatement?: (ctx: ProcessStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processDirective`.
	 * @param ctx the parse tree
	 */
	enterProcessDirective?: (ctx: ProcessDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processDirective`.
	 * @param ctx the parse tree
	 */
	exitProcessDirective?: (ctx: ProcessDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processInput`.
	 * @param ctx the parse tree
	 */
	enterProcessInput?: (ctx: ProcessInputContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processInput`.
	 * @param ctx the parse tree
	 */
	exitProcessInput?: (ctx: ProcessInputContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processInputType`.
	 * @param ctx the parse tree
	 */
	enterProcessInputType?: (ctx: ProcessInputTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processInputType`.
	 * @param ctx the parse tree
	 */
	exitProcessInputType?: (ctx: ProcessInputTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processInputVal`.
	 * @param ctx the parse tree
	 */
	enterProcessInputVal?: (ctx: ProcessInputValContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processInputVal`.
	 * @param ctx the parse tree
	 */
	exitProcessInputVal?: (ctx: ProcessInputValContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processInputEnv`.
	 * @param ctx the parse tree
	 */
	enterProcessInputEnv?: (ctx: ProcessInputEnvContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processInputEnv`.
	 * @param ctx the parse tree
	 */
	exitProcessInputEnv?: (ctx: ProcessInputEnvContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processInputFile`.
	 * @param ctx the parse tree
	 */
	enterProcessInputFile?: (ctx: ProcessInputFileContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processInputFile`.
	 * @param ctx the parse tree
	 */
	exitProcessInputFile?: (ctx: ProcessInputFileContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processInputPath`.
	 * @param ctx the parse tree
	 */
	enterProcessInputPath?: (ctx: ProcessInputPathContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processInputPath`.
	 * @param ctx the parse tree
	 */
	exitProcessInputPath?: (ctx: ProcessInputPathContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processInputStdin`.
	 * @param ctx the parse tree
	 */
	enterProcessInputStdin?: (ctx: ProcessInputStdinContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processInputStdin`.
	 * @param ctx the parse tree
	 */
	exitProcessInputStdin?: (ctx: ProcessInputStdinContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processInputExpr`.
	 * @param ctx the parse tree
	 */
	enterProcessInputExpr?: (ctx: ProcessInputExprContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processInputExpr`.
	 * @param ctx the parse tree
	 */
	exitProcessInputExpr?: (ctx: ProcessInputExprContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processInputTuple`.
	 * @param ctx the parse tree
	 */
	enterProcessInputTuple?: (ctx: ProcessInputTupleContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processInputTuple`.
	 * @param ctx the parse tree
	 */
	exitProcessInputTuple?: (ctx: ProcessInputTupleContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processOutput`.
	 * @param ctx the parse tree
	 */
	enterProcessOutput?: (ctx: ProcessOutputContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processOutput`.
	 * @param ctx the parse tree
	 */
	exitProcessOutput?: (ctx: ProcessOutputContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processOutputType`.
	 * @param ctx the parse tree
	 */
	enterProcessOutputType?: (ctx: ProcessOutputTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processOutputType`.
	 * @param ctx the parse tree
	 */
	exitProcessOutputType?: (ctx: ProcessOutputTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processOutputVal`.
	 * @param ctx the parse tree
	 */
	enterProcessOutputVal?: (ctx: ProcessOutputValContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processOutputVal`.
	 * @param ctx the parse tree
	 */
	exitProcessOutputVal?: (ctx: ProcessOutputValContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processOutputEnv`.
	 * @param ctx the parse tree
	 */
	enterProcessOutputEnv?: (ctx: ProcessOutputEnvContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processOutputEnv`.
	 * @param ctx the parse tree
	 */
	exitProcessOutputEnv?: (ctx: ProcessOutputEnvContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processOutputFile`.
	 * @param ctx the parse tree
	 */
	enterProcessOutputFile?: (ctx: ProcessOutputFileContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processOutputFile`.
	 * @param ctx the parse tree
	 */
	exitProcessOutputFile?: (ctx: ProcessOutputFileContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processOutputPath`.
	 * @param ctx the parse tree
	 */
	enterProcessOutputPath?: (ctx: ProcessOutputPathContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processOutputPath`.
	 * @param ctx the parse tree
	 */
	exitProcessOutputPath?: (ctx: ProcessOutputPathContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processOutputStdout`.
	 * @param ctx the parse tree
	 */
	enterProcessOutputStdout?: (ctx: ProcessOutputStdoutContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processOutputStdout`.
	 * @param ctx the parse tree
	 */
	exitProcessOutputStdout?: (ctx: ProcessOutputStdoutContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processOutputExpr`.
	 * @param ctx the parse tree
	 */
	enterProcessOutputExpr?: (ctx: ProcessOutputExprContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processOutputExpr`.
	 * @param ctx the parse tree
	 */
	exitProcessOutputExpr?: (ctx: ProcessOutputExprContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.processOutputTuple`.
	 * @param ctx the parse tree
	 */
	enterProcessOutputTuple?: (ctx: ProcessOutputTupleContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.processOutputTuple`.
	 * @param ctx the parse tree
	 */
	exitProcessOutputTuple?: (ctx: ProcessOutputTupleContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.workflowDef`.
	 * @param ctx the parse tree
	 */
	enterWorkflowDef?: (ctx: WorkflowDefContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.workflowDef`.
	 * @param ctx the parse tree
	 */
	exitWorkflowDef?: (ctx: WorkflowDefContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.workflowBody`.
	 * @param ctx the parse tree
	 */
	enterWorkflowBody?: (ctx: WorkflowBodyContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.workflowBody`.
	 * @param ctx the parse tree
	 */
	exitWorkflowBody?: (ctx: WorkflowBodyContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.scriptStatements`.
	 * @param ctx the parse tree
	 */
	enterScriptStatements?: (ctx: ScriptStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.scriptStatements`.
	 * @param ctx the parse tree
	 */
	exitScriptStatements?: (ctx: ScriptStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.modifiersOpt`.
	 * @param ctx the parse tree
	 */
	enterModifiersOpt?: (ctx: ModifiersOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.modifiersOpt`.
	 * @param ctx the parse tree
	 */
	exitModifiersOpt?: (ctx: ModifiersOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.modifiers`.
	 * @param ctx the parse tree
	 */
	enterModifiers?: (ctx: ModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.modifiers`.
	 * @param ctx the parse tree
	 */
	exitModifiers?: (ctx: ModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.classOrInterfaceModifiersOpt`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifiersOpt?: (ctx: ClassOrInterfaceModifiersOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.classOrInterfaceModifiersOpt`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifiersOpt?: (ctx: ClassOrInterfaceModifiersOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.classOrInterfaceModifiers`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.classOrInterfaceModifiers`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	enterVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	exitVariableModifier?: (ctx: VariableModifierContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.variableModifiersOpt`.
	 * @param ctx the parse tree
	 */
	enterVariableModifiersOpt?: (ctx: VariableModifiersOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.variableModifiersOpt`.
	 * @param ctx the parse tree
	 */
	exitVariableModifiersOpt?: (ctx: VariableModifiersOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.variableModifiers`.
	 * @param ctx the parse tree
	 */
	enterVariableModifiers?: (ctx: VariableModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.variableModifiers`.
	 * @param ctx the parse tree
	 */
	exitVariableModifiers?: (ctx: VariableModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.typeBound`.
	 * @param ctx the parse tree
	 */
	enterTypeBound?: (ctx: TypeBoundContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.typeBound`.
	 * @param ctx the parse tree
	 */
	exitTypeBound?: (ctx: TypeBoundContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	enterEnumConstants?: (ctx: EnumConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	exitEnumConstants?: (ctx: EnumConstantsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumConstant?: (ctx: EnumConstantContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.compactConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterCompactConstructorDeclaration?: (ctx: CompactConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.compactConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitCompactConstructorDeclaration?: (ctx: CompactConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.methodName`.
	 * @param ctx the parse tree
	 */
	enterMethodName?: (ctx: MethodNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.methodName`.
	 * @param ctx the parse tree
	 */
	exitMethodName?: (ctx: MethodNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.returnType`.
	 * @param ctx the parse tree
	 */
	enterReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.returnType`.
	 * @param ctx the parse tree
	 */
	exitReturnType?: (ctx: ReturnTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.variableInitializers`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializers?: (ctx: VariableInitializersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.variableInitializers`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializers?: (ctx: VariableInitializersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.emptyDims`.
	 * @param ctx the parse tree
	 */
	enterEmptyDims?: (ctx: EmptyDimsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.emptyDims`.
	 * @param ctx the parse tree
	 */
	exitEmptyDims?: (ctx: EmptyDimsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.emptyDimsOpt`.
	 * @param ctx the parse tree
	 */
	enterEmptyDimsOpt?: (ctx: EmptyDimsOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.emptyDimsOpt`.
	 * @param ctx the parse tree
	 */
	exitEmptyDimsOpt?: (ctx: EmptyDimsOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.annotatedQualifiedClassName`.
	 * @param ctx the parse tree
	 */
	enterAnnotatedQualifiedClassName?: (ctx: AnnotatedQualifiedClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.annotatedQualifiedClassName`.
	 * @param ctx the parse tree
	 */
	exitAnnotatedQualifiedClassName?: (ctx: AnnotatedQualifiedClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.qualifiedClassNameList`.
	 * @param ctx the parse tree
	 */
	enterQualifiedClassNameList?: (ctx: QualifiedClassNameListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.qualifiedClassNameList`.
	 * @param ctx the parse tree
	 */
	exitQualifiedClassNameList?: (ctx: QualifiedClassNameListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.thisFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterThisFormalParameter?: (ctx: ThisFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.thisFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitThisFormalParameter?: (ctx: ThisFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.methodBody`.
	 * @param ctx the parse tree
	 */
	enterMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.methodBody`.
	 * @param ctx the parse tree
	 */
	exitMethodBody?: (ctx: MethodBodyContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.qualifiedNameElement`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameElement?: (ctx: QualifiedNameElementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.qualifiedNameElement`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameElement?: (ctx: QualifiedNameElementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.qualifiedNameElements`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameElements?: (ctx: QualifiedNameElementsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.qualifiedNameElements`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameElements?: (ctx: QualifiedNameElementsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.qualifiedClassName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedClassName?: (ctx: QualifiedClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.qualifiedClassName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedClassName?: (ctx: QualifiedClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.qualifiedStandardClassName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedStandardClassName?: (ctx: QualifiedStandardClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.qualifiedStandardClassName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedStandardClassName?: (ctx: QualifiedStandardClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.gstring`.
	 * @param ctx the parse tree
	 */
	enterGstring?: (ctx: GstringContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.gstring`.
	 * @param ctx the parse tree
	 */
	exitGstring?: (ctx: GstringContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.gstringValue`.
	 * @param ctx the parse tree
	 */
	enterGstringValue?: (ctx: GstringValueContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.gstringValue`.
	 * @param ctx the parse tree
	 */
	exitGstringValue?: (ctx: GstringValueContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.gstringPath`.
	 * @param ctx the parse tree
	 */
	enterGstringPath?: (ctx: GstringPathContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.gstringPath`.
	 * @param ctx the parse tree
	 */
	exitGstringPath?: (ctx: GstringPathContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.standardLambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterStandardLambdaExpression?: (ctx: StandardLambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.standardLambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitStandardLambdaExpression?: (ctx: StandardLambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.standardLambdaParameters`.
	 * @param ctx the parse tree
	 */
	enterStandardLambdaParameters?: (ctx: StandardLambdaParametersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.standardLambdaParameters`.
	 * @param ctx the parse tree
	 */
	exitStandardLambdaParameters?: (ctx: StandardLambdaParametersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	enterLambdaBody?: (ctx: LambdaBodyContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	exitLambdaBody?: (ctx: LambdaBodyContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.closure`.
	 * @param ctx the parse tree
	 */
	enterClosure?: (ctx: ClosureContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.closure`.
	 * @param ctx the parse tree
	 */
	exitClosure?: (ctx: ClosureContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.closureOrLambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterClosureOrLambdaExpression?: (ctx: ClosureOrLambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.closureOrLambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitClosureOrLambdaExpression?: (ctx: ClosureOrLambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.blockStatementsOpt`.
	 * @param ctx the parse tree
	 */
	enterBlockStatementsOpt?: (ctx: BlockStatementsOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.blockStatementsOpt`.
	 * @param ctx the parse tree
	 */
	exitBlockStatementsOpt?: (ctx: BlockStatementsOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.blockStatements`.
	 * @param ctx the parse tree
	 */
	enterBlockStatements?: (ctx: BlockStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.blockStatements`.
	 * @param ctx the parse tree
	 */
	exitBlockStatements?: (ctx: BlockStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.annotationsOpt`.
	 * @param ctx the parse tree
	 */
	enterAnnotationsOpt?: (ctx: AnnotationsOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.annotationsOpt`.
	 * @param ctx the parse tree
	 */
	exitAnnotationsOpt?: (ctx: AnnotationsOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.elementValues`.
	 * @param ctx the parse tree
	 */
	enterElementValues?: (ctx: ElementValuesContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.elementValues`.
	 * @param ctx the parse tree
	 */
	exitElementValues?: (ctx: ElementValuesContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.annotationName`.
	 * @param ctx the parse tree
	 */
	enterAnnotationName?: (ctx: AnnotationNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.annotationName`.
	 * @param ctx the parse tree
	 */
	exitAnnotationName?: (ctx: AnnotationNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.elementValuePairName`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairName?: (ctx: ElementValuePairNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.elementValuePairName`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairName?: (ctx: ElementValuePairNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.typeNamePairs`.
	 * @param ctx the parse tree
	 */
	enterTypeNamePairs?: (ctx: TypeNamePairsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.typeNamePairs`.
	 * @param ctx the parse tree
	 */
	exitTypeNamePairs?: (ctx: TypeNamePairsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.typeNamePair`.
	 * @param ctx the parse tree
	 */
	enterTypeNamePair?: (ctx: TypeNamePairContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.typeNamePair`.
	 * @param ctx the parse tree
	 */
	exitTypeNamePair?: (ctx: TypeNamePairContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.variableNames`.
	 * @param ctx the parse tree
	 */
	enterVariableNames?: (ctx: VariableNamesContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.variableNames`.
	 * @param ctx the parse tree
	 */
	exitVariableNames?: (ctx: VariableNamesContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	enterConditionalStatement?: (ctx: ConditionalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	exitConditionalStatement?: (ctx: ConditionalStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	enterIfElseStatement?: (ctx: IfElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	exitIfElseStatement?: (ctx: IfElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	enterYieldStatement?: (ctx: YieldStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	exitYieldStatement?: (ctx: YieldStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.tryCatchStatement`.
	 * @param ctx the parse tree
	 */
	enterTryCatchStatement?: (ctx: TryCatchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.tryCatchStatement`.
	 * @param ctx the parse tree
	 */
	exitTryCatchStatement?: (ctx: TryCatchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.assertStatement`.
	 * @param ctx the parse tree
	 */
	enterAssertStatement?: (ctx: AssertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.assertStatement`.
	 * @param ctx the parse tree
	 */
	exitAssertStatement?: (ctx: AssertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.catchType`.
	 * @param ctx the parse tree
	 */
	enterCatchType?: (ctx: CatchTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.catchType`.
	 * @param ctx the parse tree
	 */
	exitCatchType?: (ctx: CatchTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	exitFinallyBlock?: (ctx: FinallyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.resources`.
	 * @param ctx the parse tree
	 */
	enterResources?: (ctx: ResourcesContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.resources`.
	 * @param ctx the parse tree
	 */
	exitResources?: (ctx: ResourcesContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.resourceList`.
	 * @param ctx the parse tree
	 */
	enterResourceList?: (ctx: ResourceListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.resourceList`.
	 * @param ctx the parse tree
	 */
	exitResourceList?: (ctx: ResourceListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabel?: (ctx: SwitchLabelContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.forControl`.
	 * @param ctx the parse tree
	 */
	enterForControl?: (ctx: ForControlContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.forControl`.
	 * @param ctx the parse tree
	 */
	exitForControl?: (ctx: ForControlContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.classicalForControl`.
	 * @param ctx the parse tree
	 */
	enterClassicalForControl?: (ctx: ClassicalForControlContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.classicalForControl`.
	 * @param ctx the parse tree
	 */
	exitClassicalForControl?: (ctx: ClassicalForControlContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.castParExpression`.
	 * @param ctx the parse tree
	 */
	enterCastParExpression?: (ctx: CastParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.castParExpression`.
	 * @param ctx the parse tree
	 */
	exitCastParExpression?: (ctx: CastParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.parExpression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.parExpression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.expressionInPar`.
	 * @param ctx the parse tree
	 */
	enterExpressionInPar?: (ctx: ExpressionInParContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.expressionInPar`.
	 * @param ctx the parse tree
	 */
	exitExpressionInPar?: (ctx: ExpressionInParContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.expressionListElement`.
	 * @param ctx the parse tree
	 */
	enterExpressionListElement?: (ctx: ExpressionListElementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.expressionListElement`.
	 * @param ctx the parse tree
	 */
	exitExpressionListElement?: (ctx: ExpressionListElementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.enhancedStatementExpression`.
	 * @param ctx the parse tree
	 */
	enterEnhancedStatementExpression?: (ctx: EnhancedStatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.enhancedStatementExpression`.
	 * @param ctx the parse tree
	 */
	exitEnhancedStatementExpression?: (ctx: EnhancedStatementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	enterStatementExpression?: (ctx: StatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	exitStatementExpression?: (ctx: StatementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.switchExpression`.
	 * @param ctx the parse tree
	 */
	enterSwitchExpression?: (ctx: SwitchExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.switchExpression`.
	 * @param ctx the parse tree
	 */
	exitSwitchExpression?: (ctx: SwitchExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.switchBlockStatementExpressionGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementExpressionGroup?: (ctx: SwitchBlockStatementExpressionGroupContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.switchBlockStatementExpressionGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementExpressionGroup?: (ctx: SwitchBlockStatementExpressionGroupContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.switchExpressionLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchExpressionLabel?: (ctx: SwitchExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.switchExpressionLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchExpressionLabel?: (ctx: SwitchExpressionLabelContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.commandExpression`.
	 * @param ctx the parse tree
	 */
	enterCommandExpression?: (ctx: CommandExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.commandExpression`.
	 * @param ctx the parse tree
	 */
	exitCommandExpression?: (ctx: CommandExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.commandArgument`.
	 * @param ctx the parse tree
	 */
	enterCommandArgument?: (ctx: CommandArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.commandArgument`.
	 * @param ctx the parse tree
	 */
	exitCommandArgument?: (ctx: CommandArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.pathExpression`.
	 * @param ctx the parse tree
	 */
	enterPathExpression?: (ctx: PathExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.pathExpression`.
	 * @param ctx the parse tree
	 */
	exitPathExpression?: (ctx: PathExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterPathElement?: (ctx: PathElementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitPathElement?: (ctx: PathElementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.namePart`.
	 * @param ctx the parse tree
	 */
	enterNamePart?: (ctx: NamePartContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.namePart`.
	 * @param ctx the parse tree
	 */
	exitNamePart?: (ctx: NamePartContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.dynamicMemberName`.
	 * @param ctx the parse tree
	 */
	enterDynamicMemberName?: (ctx: DynamicMemberNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.dynamicMemberName`.
	 * @param ctx the parse tree
	 */
	exitDynamicMemberName?: (ctx: DynamicMemberNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.indexPropertyArgs`.
	 * @param ctx the parse tree
	 */
	enterIndexPropertyArgs?: (ctx: IndexPropertyArgsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.indexPropertyArgs`.
	 * @param ctx the parse tree
	 */
	exitIndexPropertyArgs?: (ctx: IndexPropertyArgsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.namedPropertyArgs`.
	 * @param ctx the parse tree
	 */
	enterNamedPropertyArgs?: (ctx: NamedPropertyArgsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.namedPropertyArgs`.
	 * @param ctx the parse tree
	 */
	exitNamedPropertyArgs?: (ctx: NamedPropertyArgsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.mapEntryList`.
	 * @param ctx the parse tree
	 */
	enterMapEntryList?: (ctx: MapEntryListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.mapEntryList`.
	 * @param ctx the parse tree
	 */
	exitMapEntryList?: (ctx: MapEntryListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.mapEntry`.
	 * @param ctx the parse tree
	 */
	enterMapEntry?: (ctx: MapEntryContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.mapEntry`.
	 * @param ctx the parse tree
	 */
	exitMapEntry?: (ctx: MapEntryContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.mapEntryLabel`.
	 * @param ctx the parse tree
	 */
	enterMapEntryLabel?: (ctx: MapEntryLabelContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.mapEntryLabel`.
	 * @param ctx the parse tree
	 */
	exitMapEntryLabel?: (ctx: MapEntryLabelContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.creator`.
	 * @param ctx the parse tree
	 */
	enterCreator?: (ctx: CreatorContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.creator`.
	 * @param ctx the parse tree
	 */
	exitCreator?: (ctx: CreatorContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.dim`.
	 * @param ctx the parse tree
	 */
	enterDim?: (ctx: DimContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.dim`.
	 * @param ctx the parse tree
	 */
	exitDim?: (ctx: DimContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.anonymousInnerClassDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnonymousInnerClassDeclaration?: (ctx: AnonymousInnerClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.anonymousInnerClassDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnonymousInnerClassDeclaration?: (ctx: AnonymousInnerClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.createdName`.
	 * @param ctx the parse tree
	 */
	enterCreatedName?: (ctx: CreatedNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.createdName`.
	 * @param ctx the parse tree
	 */
	exitCreatedName?: (ctx: CreatedNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	enterNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	exitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.enhancedArgumentListInPar`.
	 * @param ctx the parse tree
	 */
	enterEnhancedArgumentListInPar?: (ctx: EnhancedArgumentListInParContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.enhancedArgumentListInPar`.
	 * @param ctx the parse tree
	 */
	exitEnhancedArgumentListInPar?: (ctx: EnhancedArgumentListInParContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.enhancedArgumentListElement`.
	 * @param ctx the parse tree
	 */
	enterEnhancedArgumentListElement?: (ctx: EnhancedArgumentListElementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.enhancedArgumentListElement`.
	 * @param ctx the parse tree
	 */
	exitEnhancedArgumentListElement?: (ctx: EnhancedArgumentListElementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.className`.
	 * @param ctx the parse tree
	 */
	enterClassName?: (ctx: ClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.className`.
	 * @param ctx the parse tree
	 */
	exitClassName?: (ctx: ClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.builtInType`.
	 * @param ctx the parse tree
	 */
	enterBuiltInType?: (ctx: BuiltInTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.builtInType`.
	 * @param ctx the parse tree
	 */
	exitBuiltInType?: (ctx: BuiltInTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.keywords`.
	 * @param ctx the parse tree
	 */
	enterKeywords?: (ctx: KeywordsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.keywords`.
	 * @param ctx the parse tree
	 */
	exitKeywords?: (ctx: KeywordsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.rparen`.
	 * @param ctx the parse tree
	 */
	enterRparen?: (ctx: RparenContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.rparen`.
	 * @param ctx the parse tree
	 */
	exitRparen?: (ctx: RparenContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.nls`.
	 * @param ctx the parse tree
	 */
	enterNls?: (ctx: NlsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.nls`.
	 * @param ctx the parse tree
	 */
	exitNls?: (ctx: NlsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowScriptParser.sep`.
	 * @param ctx the parse tree
	 */
	enterSep?: (ctx: SepContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowScriptParser.sep`.
	 * @param ctx the parse tree
	 */
	exitSep?: (ctx: SepContext) => void;
}

