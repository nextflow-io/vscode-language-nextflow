// Generated from src/grammar/NextflowConfigParser.g4 by ANTLR 4.9.0-SNAPSHOT


package groovy.parser;


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IdentifierPrmrAltContext } from "./NextflowConfigParser";
import { LiteralPrmrAltContext } from "./NextflowConfigParser";
import { GstringPrmrAltContext } from "./NextflowConfigParser";
import { NewPrmrAltContext } from "./NextflowConfigParser";
import { ThisPrmrAltContext } from "./NextflowConfigParser";
import { SuperPrmrAltContext } from "./NextflowConfigParser";
import { ParenPrmrAltContext } from "./NextflowConfigParser";
import { ClosureOrLambdaExpressionPrmrAltContext } from "./NextflowConfigParser";
import { ListPrmrAltContext } from "./NextflowConfigParser";
import { MapPrmrAltContext } from "./NextflowConfigParser";
import { BuiltInTypePrmrAltContext } from "./NextflowConfigParser";
import { IntegerLiteralAltContext } from "./NextflowConfigParser";
import { FloatingPointLiteralAltContext } from "./NextflowConfigParser";
import { StringLiteralAltContext } from "./NextflowConfigParser";
import { BooleanLiteralAltContext } from "./NextflowConfigParser";
import { NullLiteralAltContext } from "./NextflowConfigParser";
import { CastExprAltContext } from "./NextflowConfigParser";
import { PostfixExprAltContext } from "./NextflowConfigParser";
import { SwitchExprAltContext } from "./NextflowConfigParser";
import { UnaryNotExprAltContext } from "./NextflowConfigParser";
import { PowerExprAltContext } from "./NextflowConfigParser";
import { UnaryAddExprAltContext } from "./NextflowConfigParser";
import { MultiplicativeExprAltContext } from "./NextflowConfigParser";
import { AdditiveExprAltContext } from "./NextflowConfigParser";
import { ShiftExprAltContext } from "./NextflowConfigParser";
import { RelationalExprAltContext } from "./NextflowConfigParser";
import { EqualityExprAltContext } from "./NextflowConfigParser";
import { RegexExprAltContext } from "./NextflowConfigParser";
import { AndExprAltContext } from "./NextflowConfigParser";
import { ExclusiveOrExprAltContext } from "./NextflowConfigParser";
import { InclusiveOrExprAltContext } from "./NextflowConfigParser";
import { LogicalAndExprAltContext } from "./NextflowConfigParser";
import { LogicalOrExprAltContext } from "./NextflowConfigParser";
import { ConditionalExprAltContext } from "./NextflowConfigParser";
import { MultipleAssignmentExprAltContext } from "./NextflowConfigParser";
import { AssignmentExprAltContext } from "./NextflowConfigParser";
import { BlockStmtAltContext } from "./NextflowConfigParser";
import { ConditionalStmtAltContext } from "./NextflowConfigParser";
import { LoopStmtAltContext } from "./NextflowConfigParser";
import { TryCatchStmtAltContext } from "./NextflowConfigParser";
import { SynchronizedStmtAltContext } from "./NextflowConfigParser";
import { ReturnStmtAltContext } from "./NextflowConfigParser";
import { ThrowStmtAltContext } from "./NextflowConfigParser";
import { BreakStmtAltContext } from "./NextflowConfigParser";
import { ContinueStmtAltContext } from "./NextflowConfigParser";
import { YieldStmtAltContext } from "./NextflowConfigParser";
import { LabeledStmtAltContext } from "./NextflowConfigParser";
import { AssertStmtAltContext } from "./NextflowConfigParser";
import { LocalVariableDeclarationStmtAltContext } from "./NextflowConfigParser";
import { ExpressionStmtAltContext } from "./NextflowConfigParser";
import { EmptyStmtAltContext } from "./NextflowConfigParser";
import { CommandExprAltContext } from "./NextflowConfigParser";
import { ForStmtAltContext } from "./NextflowConfigParser";
import { WhileStmtAltContext } from "./NextflowConfigParser";
import { DoWhileStmtAltContext } from "./NextflowConfigParser";
import { CompilationUnitContext } from "./NextflowConfigParser";
import { ConfigStatementContext } from "./NextflowConfigParser";
import { IncludeStatementContext } from "./NextflowConfigParser";
import { AssignmentContext } from "./NextflowConfigParser";
import { ConfigPathExpressionContext } from "./NextflowConfigParser";
import { BlockContext } from "./NextflowConfigParser";
import { BlockStatementContext } from "./NextflowConfigParser";
import { SelectorContext } from "./NextflowConfigParser";
import { ScriptStatementsContext } from "./NextflowConfigParser";
import { ScriptStatementContext } from "./NextflowConfigParser";
import { PackageDeclarationContext } from "./NextflowConfigParser";
import { ImportDeclarationContext } from "./NextflowConfigParser";
import { TypeDeclarationContext } from "./NextflowConfigParser";
import { ModifierContext } from "./NextflowConfigParser";
import { ModifiersOptContext } from "./NextflowConfigParser";
import { ModifiersContext } from "./NextflowConfigParser";
import { ClassOrInterfaceModifiersOptContext } from "./NextflowConfigParser";
import { ClassOrInterfaceModifiersContext } from "./NextflowConfigParser";
import { ClassOrInterfaceModifierContext } from "./NextflowConfigParser";
import { VariableModifierContext } from "./NextflowConfigParser";
import { VariableModifiersOptContext } from "./NextflowConfigParser";
import { VariableModifiersContext } from "./NextflowConfigParser";
import { TypeParametersContext } from "./NextflowConfigParser";
import { TypeParameterContext } from "./NextflowConfigParser";
import { TypeBoundContext } from "./NextflowConfigParser";
import { TypeListContext } from "./NextflowConfigParser";
import { ClassDeclarationContext } from "./NextflowConfigParser";
import { ClassBodyContext } from "./NextflowConfigParser";
import { EnumConstantsContext } from "./NextflowConfigParser";
import { EnumConstantContext } from "./NextflowConfigParser";
import { ClassBodyDeclarationContext } from "./NextflowConfigParser";
import { MemberDeclarationContext } from "./NextflowConfigParser";
import { MethodDeclarationContext } from "./NextflowConfigParser";
import { CompactConstructorDeclarationContext } from "./NextflowConfigParser";
import { MethodNameContext } from "./NextflowConfigParser";
import { ReturnTypeContext } from "./NextflowConfigParser";
import { FieldDeclarationContext } from "./NextflowConfigParser";
import { VariableDeclaratorsContext } from "./NextflowConfigParser";
import { VariableDeclaratorContext } from "./NextflowConfigParser";
import { VariableDeclaratorIdContext } from "./NextflowConfigParser";
import { VariableInitializerContext } from "./NextflowConfigParser";
import { VariableInitializersContext } from "./NextflowConfigParser";
import { EmptyDimsContext } from "./NextflowConfigParser";
import { EmptyDimsOptContext } from "./NextflowConfigParser";
import { TypeContext } from "./NextflowConfigParser";
import { ClassOrInterfaceTypeContext } from "./NextflowConfigParser";
import { PrimitiveTypeContext } from "./NextflowConfigParser";
import { TypeArgumentsContext } from "./NextflowConfigParser";
import { TypeArgumentContext } from "./NextflowConfigParser";
import { AnnotatedQualifiedClassNameContext } from "./NextflowConfigParser";
import { QualifiedClassNameListContext } from "./NextflowConfigParser";
import { FormalParametersContext } from "./NextflowConfigParser";
import { FormalParameterListContext } from "./NextflowConfigParser";
import { ThisFormalParameterContext } from "./NextflowConfigParser";
import { FormalParameterContext } from "./NextflowConfigParser";
import { MethodBodyContext } from "./NextflowConfigParser";
import { QualifiedNameContext } from "./NextflowConfigParser";
import { QualifiedNameElementContext } from "./NextflowConfigParser";
import { QualifiedNameElementsContext } from "./NextflowConfigParser";
import { QualifiedClassNameContext } from "./NextflowConfigParser";
import { QualifiedStandardClassNameContext } from "./NextflowConfigParser";
import { LiteralContext } from "./NextflowConfigParser";
import { GstringContext } from "./NextflowConfigParser";
import { GstringValueContext } from "./NextflowConfigParser";
import { GstringPathContext } from "./NextflowConfigParser";
import { StandardLambdaExpressionContext } from "./NextflowConfigParser";
import { StandardLambdaParametersContext } from "./NextflowConfigParser";
import { LambdaBodyContext } from "./NextflowConfigParser";
import { ClosureContext } from "./NextflowConfigParser";
import { ClosureOrLambdaExpressionContext } from "./NextflowConfigParser";
import { BlockStatementsOptContext } from "./NextflowConfigParser";
import { BlockStatementsContext } from "./NextflowConfigParser";
import { AnnotationsOptContext } from "./NextflowConfigParser";
import { AnnotationContext } from "./NextflowConfigParser";
import { ElementValuesContext } from "./NextflowConfigParser";
import { AnnotationNameContext } from "./NextflowConfigParser";
import { ElementValuePairsContext } from "./NextflowConfigParser";
import { ElementValuePairContext } from "./NextflowConfigParser";
import { ElementValuePairNameContext } from "./NextflowConfigParser";
import { ElementValueContext } from "./NextflowConfigParser";
import { ElementValueArrayInitializerContext } from "./NextflowConfigParser";
import { LocalVariableDeclarationContext } from "./NextflowConfigParser";
import { VariableDeclarationContext } from "./NextflowConfigParser";
import { TypeNamePairsContext } from "./NextflowConfigParser";
import { TypeNamePairContext } from "./NextflowConfigParser";
import { VariableNamesContext } from "./NextflowConfigParser";
import { ConditionalStatementContext } from "./NextflowConfigParser";
import { IfElseStatementContext } from "./NextflowConfigParser";
import { SwitchStatementContext } from "./NextflowConfigParser";
import { LoopStatementContext } from "./NextflowConfigParser";
import { ContinueStatementContext } from "./NextflowConfigParser";
import { BreakStatementContext } from "./NextflowConfigParser";
import { YieldStatementContext } from "./NextflowConfigParser";
import { TryCatchStatementContext } from "./NextflowConfigParser";
import { AssertStatementContext } from "./NextflowConfigParser";
import { StatementContext } from "./NextflowConfigParser";
import { CatchClauseContext } from "./NextflowConfigParser";
import { CatchTypeContext } from "./NextflowConfigParser";
import { FinallyBlockContext } from "./NextflowConfigParser";
import { ResourcesContext } from "./NextflowConfigParser";
import { ResourceListContext } from "./NextflowConfigParser";
import { ResourceContext } from "./NextflowConfigParser";
import { SwitchBlockStatementGroupContext } from "./NextflowConfigParser";
import { SwitchLabelContext } from "./NextflowConfigParser";
import { ForControlContext } from "./NextflowConfigParser";
import { EnhancedForControlContext } from "./NextflowConfigParser";
import { ClassicalForControlContext } from "./NextflowConfigParser";
import { ForInitContext } from "./NextflowConfigParser";
import { ForUpdateContext } from "./NextflowConfigParser";
import { CastParExpressionContext } from "./NextflowConfigParser";
import { ParExpressionContext } from "./NextflowConfigParser";
import { ExpressionInParContext } from "./NextflowConfigParser";
import { ExpressionListContext } from "./NextflowConfigParser";
import { ExpressionListElementContext } from "./NextflowConfigParser";
import { EnhancedStatementExpressionContext } from "./NextflowConfigParser";
import { StatementExpressionContext } from "./NextflowConfigParser";
import { PostfixExpressionContext } from "./NextflowConfigParser";
import { SwitchExpressionContext } from "./NextflowConfigParser";
import { SwitchBlockStatementExpressionGroupContext } from "./NextflowConfigParser";
import { SwitchExpressionLabelContext } from "./NextflowConfigParser";
import { ExpressionContext } from "./NextflowConfigParser";
import { CommandExpressionContext } from "./NextflowConfigParser";
import { CommandArgumentContext } from "./NextflowConfigParser";
import { PathExpressionContext } from "./NextflowConfigParser";
import { PathElementContext } from "./NextflowConfigParser";
import { NamePartContext } from "./NextflowConfigParser";
import { DynamicMemberNameContext } from "./NextflowConfigParser";
import { IndexPropertyArgsContext } from "./NextflowConfigParser";
import { NamedPropertyArgsContext } from "./NextflowConfigParser";
import { PrimaryContext } from "./NextflowConfigParser";
import { ListContext } from "./NextflowConfigParser";
import { MapContext } from "./NextflowConfigParser";
import { MapEntryListContext } from "./NextflowConfigParser";
import { MapEntryContext } from "./NextflowConfigParser";
import { MapEntryLabelContext } from "./NextflowConfigParser";
import { CreatorContext } from "./NextflowConfigParser";
import { DimContext } from "./NextflowConfigParser";
import { ArrayInitializerContext } from "./NextflowConfigParser";
import { AnonymousInnerClassDeclarationContext } from "./NextflowConfigParser";
import { CreatedNameContext } from "./NextflowConfigParser";
import { NonWildcardTypeArgumentsContext } from "./NextflowConfigParser";
import { TypeArgumentsOrDiamondContext } from "./NextflowConfigParser";
import { ArgumentsContext } from "./NextflowConfigParser";
import { EnhancedArgumentListInParContext } from "./NextflowConfigParser";
import { EnhancedArgumentListElementContext } from "./NextflowConfigParser";
import { StringLiteralContext } from "./NextflowConfigParser";
import { ClassNameContext } from "./NextflowConfigParser";
import { IdentifierContext } from "./NextflowConfigParser";
import { BuiltInTypeContext } from "./NextflowConfigParser";
import { KeywordsContext } from "./NextflowConfigParser";
import { RparenContext } from "./NextflowConfigParser";
import { NlsContext } from "./NextflowConfigParser";
import { SepContext } from "./NextflowConfigParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `NextflowConfigParser`.
 */
export interface NextflowConfigParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `identifierPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	enterIdentifierPrmrAlt?: (ctx: IdentifierPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	exitIdentifierPrmrAlt?: (ctx: IdentifierPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `literalPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	enterLiteralPrmrAlt?: (ctx: LiteralPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `literalPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	exitLiteralPrmrAlt?: (ctx: LiteralPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `gstringPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	enterGstringPrmrAlt?: (ctx: GstringPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `gstringPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	exitGstringPrmrAlt?: (ctx: GstringPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `newPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	enterNewPrmrAlt?: (ctx: NewPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `newPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	exitNewPrmrAlt?: (ctx: NewPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `thisPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	enterThisPrmrAlt?: (ctx: ThisPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `thisPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	exitThisPrmrAlt?: (ctx: ThisPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `superPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	enterSuperPrmrAlt?: (ctx: SuperPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `superPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	exitSuperPrmrAlt?: (ctx: SuperPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `parenPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 */
	enterParenPrmrAlt?: (ctx: ParenPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `parenPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 */
	exitParenPrmrAlt?: (ctx: ParenPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `closureOrLambdaExpressionPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	enterClosureOrLambdaExpressionPrmrAlt?: (ctx: ClosureOrLambdaExpressionPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `closureOrLambdaExpressionPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	exitClosureOrLambdaExpressionPrmrAlt?: (ctx: ClosureOrLambdaExpressionPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `listPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	enterListPrmrAlt?: (ctx: ListPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `listPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	exitListPrmrAlt?: (ctx: ListPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `mapPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	enterMapPrmrAlt?: (ctx: MapPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `mapPrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	exitMapPrmrAlt?: (ctx: MapPrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `builtInTypePrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	enterBuiltInTypePrmrAlt?: (ctx: BuiltInTypePrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `builtInTypePrmrAlt`
	 * labeled alternative in `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	exitBuiltInTypePrmrAlt?: (ctx: BuiltInTypePrmrAltContext) => void;

	/**
	 * Enter a parse tree produced by the `integerLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteralAlt?: (ctx: IntegerLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteralAlt?: (ctx: IntegerLiteralAltContext) => void;

	/**
	 * Enter a parse tree produced by the `floatingPointLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	enterFloatingPointLiteralAlt?: (ctx: FloatingPointLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `floatingPointLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	exitFloatingPointLiteralAlt?: (ctx: FloatingPointLiteralAltContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStringLiteralAlt?: (ctx: StringLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStringLiteralAlt?: (ctx: StringLiteralAltContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteralAlt?: (ctx: BooleanLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteralAlt?: (ctx: BooleanLiteralAltContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNullLiteralAlt?: (ctx: NullLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteralAlt`
	 * labeled alternative in `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNullLiteralAlt?: (ctx: NullLiteralAltContext) => void;

	/**
	 * Enter a parse tree produced by the `castExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExprAlt?: (ctx: CastExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `castExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExprAlt?: (ctx: CastExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `postfixExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExprAlt?: (ctx: PostfixExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `postfixExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExprAlt?: (ctx: PostfixExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `switchExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSwitchExprAlt?: (ctx: SwitchExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `switchExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSwitchExprAlt?: (ctx: SwitchExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryNotExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryNotExprAlt?: (ctx: UnaryNotExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryNotExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryNotExprAlt?: (ctx: UnaryNotExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `powerExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPowerExprAlt?: (ctx: PowerExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `powerExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPowerExprAlt?: (ctx: PowerExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryAddExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryAddExprAlt?: (ctx: UnaryAddExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryAddExprAlt`
	 * labeled alternative in `NextflowConfigParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryAddExprAlt?: (ctx: UnaryAddExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `multiplicativeExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExprAlt?: (ctx: MultiplicativeExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplicativeExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExprAlt?: (ctx: MultiplicativeExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `additiveExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExprAlt?: (ctx: AdditiveExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `additiveExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExprAlt?: (ctx: AdditiveExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `shiftExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterShiftExprAlt?: (ctx: ShiftExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `shiftExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitShiftExprAlt?: (ctx: ShiftExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `relationalExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExprAlt?: (ctx: RelationalExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `relationalExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExprAlt?: (ctx: RelationalExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `equalityExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExprAlt?: (ctx: EqualityExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExprAlt?: (ctx: EqualityExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `regexExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRegexExprAlt?: (ctx: RegexExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `regexExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRegexExprAlt?: (ctx: RegexExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `andExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExprAlt?: (ctx: AndExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `andExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExprAlt?: (ctx: AndExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `exclusiveOrExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExclusiveOrExprAlt?: (ctx: ExclusiveOrExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `exclusiveOrExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExclusiveOrExprAlt?: (ctx: ExclusiveOrExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `inclusiveOrExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInclusiveOrExprAlt?: (ctx: InclusiveOrExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `inclusiveOrExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInclusiveOrExprAlt?: (ctx: InclusiveOrExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalAndExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExprAlt?: (ctx: LogicalAndExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalAndExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExprAlt?: (ctx: LogicalAndExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalOrExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExprAlt?: (ctx: LogicalOrExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalOrExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExprAlt?: (ctx: LogicalOrExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `conditionalExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExprAlt?: (ctx: ConditionalExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionalExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExprAlt?: (ctx: ConditionalExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `multipleAssignmentExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultipleAssignmentExprAlt?: (ctx: MultipleAssignmentExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `multipleAssignmentExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultipleAssignmentExprAlt?: (ctx: MultipleAssignmentExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `assignmentExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExprAlt?: (ctx: AssignmentExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `assignmentExprAlt`
	 * labeled alternative in `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExprAlt?: (ctx: AssignmentExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `blockStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterBlockStmtAlt?: (ctx: BlockStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `blockStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitBlockStmtAlt?: (ctx: BlockStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `conditionalStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterConditionalStmtAlt?: (ctx: ConditionalStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionalStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitConditionalStmtAlt?: (ctx: ConditionalStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `loopStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLoopStmtAlt?: (ctx: LoopStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `loopStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLoopStmtAlt?: (ctx: LoopStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `tryCatchStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTryCatchStmtAlt?: (ctx: TryCatchStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `tryCatchStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTryCatchStmtAlt?: (ctx: TryCatchStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `synchronizedStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSynchronizedStmtAlt?: (ctx: SynchronizedStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `synchronizedStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSynchronizedStmtAlt?: (ctx: SynchronizedStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `returnStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterReturnStmtAlt?: (ctx: ReturnStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `returnStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitReturnStmtAlt?: (ctx: ReturnStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `throwStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterThrowStmtAlt?: (ctx: ThrowStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `throwStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitThrowStmtAlt?: (ctx: ThrowStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `breakStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterBreakStmtAlt?: (ctx: BreakStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `breakStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitBreakStmtAlt?: (ctx: BreakStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `continueStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterContinueStmtAlt?: (ctx: ContinueStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `continueStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitContinueStmtAlt?: (ctx: ContinueStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `yieldStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterYieldStmtAlt?: (ctx: YieldStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `yieldStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitYieldStmtAlt?: (ctx: YieldStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `labeledStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLabeledStmtAlt?: (ctx: LabeledStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `labeledStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLabeledStmtAlt?: (ctx: LabeledStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `assertStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAssertStmtAlt?: (ctx: AssertStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `assertStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAssertStmtAlt?: (ctx: AssertStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `localVariableDeclarationStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclarationStmtAlt?: (ctx: LocalVariableDeclarationStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `localVariableDeclarationStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclarationStmtAlt?: (ctx: LocalVariableDeclarationStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStmtAlt?: (ctx: ExpressionStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStmtAlt?: (ctx: ExpressionStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `emptyStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStmtAlt?: (ctx: EmptyStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `emptyStmtAlt`
	 * labeled alternative in `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStmtAlt?: (ctx: EmptyStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `commandExprAlt`
	 * labeled alternative in `NextflowConfigParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	enterCommandExprAlt?: (ctx: CommandExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `commandExprAlt`
	 * labeled alternative in `NextflowConfigParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	exitCommandExprAlt?: (ctx: CommandExprAltContext) => void;

	/**
	 * Enter a parse tree produced by the `forStmtAlt`
	 * labeled alternative in `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterForStmtAlt?: (ctx: ForStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `forStmtAlt`
	 * labeled alternative in `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitForStmtAlt?: (ctx: ForStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `whileStmtAlt`
	 * labeled alternative in `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStmtAlt?: (ctx: WhileStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `whileStmtAlt`
	 * labeled alternative in `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStmtAlt?: (ctx: WhileStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by the `doWhileStmtAlt`
	 * labeled alternative in `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterDoWhileStmtAlt?: (ctx: DoWhileStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `doWhileStmtAlt`
	 * labeled alternative in `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitDoWhileStmtAlt?: (ctx: DoWhileStmtAltContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.configStatement`.
	 * @param ctx the parse tree
	 */
	enterConfigStatement?: (ctx: ConfigStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.configStatement`.
	 * @param ctx the parse tree
	 */
	exitConfigStatement?: (ctx: ConfigStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.includeStatement`.
	 * @param ctx the parse tree
	 */
	enterIncludeStatement?: (ctx: IncludeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.includeStatement`.
	 * @param ctx the parse tree
	 */
	exitIncludeStatement?: (ctx: IncludeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.configPathExpression`.
	 * @param ctx the parse tree
	 */
	enterConfigPathExpression?: (ctx: ConfigPathExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.configPathExpression`.
	 * @param ctx the parse tree
	 */
	exitConfigPathExpression?: (ctx: ConfigPathExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.scriptStatements`.
	 * @param ctx the parse tree
	 */
	enterScriptStatements?: (ctx: ScriptStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.scriptStatements`.
	 * @param ctx the parse tree
	 */
	exitScriptStatements?: (ctx: ScriptStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.scriptStatement`.
	 * @param ctx the parse tree
	 */
	enterScriptStatement?: (ctx: ScriptStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.scriptStatement`.
	 * @param ctx the parse tree
	 */
	exitScriptStatement?: (ctx: ScriptStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.modifiersOpt`.
	 * @param ctx the parse tree
	 */
	enterModifiersOpt?: (ctx: ModifiersOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.modifiersOpt`.
	 * @param ctx the parse tree
	 */
	exitModifiersOpt?: (ctx: ModifiersOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.modifiers`.
	 * @param ctx the parse tree
	 */
	enterModifiers?: (ctx: ModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.modifiers`.
	 * @param ctx the parse tree
	 */
	exitModifiers?: (ctx: ModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.classOrInterfaceModifiersOpt`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifiersOpt?: (ctx: ClassOrInterfaceModifiersOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.classOrInterfaceModifiersOpt`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifiersOpt?: (ctx: ClassOrInterfaceModifiersOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.classOrInterfaceModifiers`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.classOrInterfaceModifiers`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	enterVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	exitVariableModifier?: (ctx: VariableModifierContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.variableModifiersOpt`.
	 * @param ctx the parse tree
	 */
	enterVariableModifiersOpt?: (ctx: VariableModifiersOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.variableModifiersOpt`.
	 * @param ctx the parse tree
	 */
	exitVariableModifiersOpt?: (ctx: VariableModifiersOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.variableModifiers`.
	 * @param ctx the parse tree
	 */
	enterVariableModifiers?: (ctx: VariableModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.variableModifiers`.
	 * @param ctx the parse tree
	 */
	exitVariableModifiers?: (ctx: VariableModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.typeBound`.
	 * @param ctx the parse tree
	 */
	enterTypeBound?: (ctx: TypeBoundContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.typeBound`.
	 * @param ctx the parse tree
	 */
	exitTypeBound?: (ctx: TypeBoundContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	enterEnumConstants?: (ctx: EnumConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	exitEnumConstants?: (ctx: EnumConstantsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumConstant?: (ctx: EnumConstantContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.compactConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterCompactConstructorDeclaration?: (ctx: CompactConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.compactConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitCompactConstructorDeclaration?: (ctx: CompactConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.methodName`.
	 * @param ctx the parse tree
	 */
	enterMethodName?: (ctx: MethodNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.methodName`.
	 * @param ctx the parse tree
	 */
	exitMethodName?: (ctx: MethodNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.returnType`.
	 * @param ctx the parse tree
	 */
	enterReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.returnType`.
	 * @param ctx the parse tree
	 */
	exitReturnType?: (ctx: ReturnTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.variableInitializers`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializers?: (ctx: VariableInitializersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.variableInitializers`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializers?: (ctx: VariableInitializersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.emptyDims`.
	 * @param ctx the parse tree
	 */
	enterEmptyDims?: (ctx: EmptyDimsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.emptyDims`.
	 * @param ctx the parse tree
	 */
	exitEmptyDims?: (ctx: EmptyDimsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.emptyDimsOpt`.
	 * @param ctx the parse tree
	 */
	enterEmptyDimsOpt?: (ctx: EmptyDimsOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.emptyDimsOpt`.
	 * @param ctx the parse tree
	 */
	exitEmptyDimsOpt?: (ctx: EmptyDimsOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.annotatedQualifiedClassName`.
	 * @param ctx the parse tree
	 */
	enterAnnotatedQualifiedClassName?: (ctx: AnnotatedQualifiedClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.annotatedQualifiedClassName`.
	 * @param ctx the parse tree
	 */
	exitAnnotatedQualifiedClassName?: (ctx: AnnotatedQualifiedClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.qualifiedClassNameList`.
	 * @param ctx the parse tree
	 */
	enterQualifiedClassNameList?: (ctx: QualifiedClassNameListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.qualifiedClassNameList`.
	 * @param ctx the parse tree
	 */
	exitQualifiedClassNameList?: (ctx: QualifiedClassNameListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.thisFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterThisFormalParameter?: (ctx: ThisFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.thisFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitThisFormalParameter?: (ctx: ThisFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.methodBody`.
	 * @param ctx the parse tree
	 */
	enterMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.methodBody`.
	 * @param ctx the parse tree
	 */
	exitMethodBody?: (ctx: MethodBodyContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.qualifiedNameElement`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameElement?: (ctx: QualifiedNameElementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.qualifiedNameElement`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameElement?: (ctx: QualifiedNameElementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.qualifiedNameElements`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameElements?: (ctx: QualifiedNameElementsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.qualifiedNameElements`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameElements?: (ctx: QualifiedNameElementsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.qualifiedClassName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedClassName?: (ctx: QualifiedClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.qualifiedClassName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedClassName?: (ctx: QualifiedClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.qualifiedStandardClassName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedStandardClassName?: (ctx: QualifiedStandardClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.qualifiedStandardClassName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedStandardClassName?: (ctx: QualifiedStandardClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.gstring`.
	 * @param ctx the parse tree
	 */
	enterGstring?: (ctx: GstringContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.gstring`.
	 * @param ctx the parse tree
	 */
	exitGstring?: (ctx: GstringContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.gstringValue`.
	 * @param ctx the parse tree
	 */
	enterGstringValue?: (ctx: GstringValueContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.gstringValue`.
	 * @param ctx the parse tree
	 */
	exitGstringValue?: (ctx: GstringValueContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.gstringPath`.
	 * @param ctx the parse tree
	 */
	enterGstringPath?: (ctx: GstringPathContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.gstringPath`.
	 * @param ctx the parse tree
	 */
	exitGstringPath?: (ctx: GstringPathContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.standardLambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterStandardLambdaExpression?: (ctx: StandardLambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.standardLambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitStandardLambdaExpression?: (ctx: StandardLambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.standardLambdaParameters`.
	 * @param ctx the parse tree
	 */
	enterStandardLambdaParameters?: (ctx: StandardLambdaParametersContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.standardLambdaParameters`.
	 * @param ctx the parse tree
	 */
	exitStandardLambdaParameters?: (ctx: StandardLambdaParametersContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	enterLambdaBody?: (ctx: LambdaBodyContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	exitLambdaBody?: (ctx: LambdaBodyContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.closure`.
	 * @param ctx the parse tree
	 */
	enterClosure?: (ctx: ClosureContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.closure`.
	 * @param ctx the parse tree
	 */
	exitClosure?: (ctx: ClosureContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.closureOrLambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterClosureOrLambdaExpression?: (ctx: ClosureOrLambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.closureOrLambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitClosureOrLambdaExpression?: (ctx: ClosureOrLambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.blockStatementsOpt`.
	 * @param ctx the parse tree
	 */
	enterBlockStatementsOpt?: (ctx: BlockStatementsOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.blockStatementsOpt`.
	 * @param ctx the parse tree
	 */
	exitBlockStatementsOpt?: (ctx: BlockStatementsOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.blockStatements`.
	 * @param ctx the parse tree
	 */
	enterBlockStatements?: (ctx: BlockStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.blockStatements`.
	 * @param ctx the parse tree
	 */
	exitBlockStatements?: (ctx: BlockStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.annotationsOpt`.
	 * @param ctx the parse tree
	 */
	enterAnnotationsOpt?: (ctx: AnnotationsOptContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.annotationsOpt`.
	 * @param ctx the parse tree
	 */
	exitAnnotationsOpt?: (ctx: AnnotationsOptContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.elementValues`.
	 * @param ctx the parse tree
	 */
	enterElementValues?: (ctx: ElementValuesContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.elementValues`.
	 * @param ctx the parse tree
	 */
	exitElementValues?: (ctx: ElementValuesContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.annotationName`.
	 * @param ctx the parse tree
	 */
	enterAnnotationName?: (ctx: AnnotationNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.annotationName`.
	 * @param ctx the parse tree
	 */
	exitAnnotationName?: (ctx: AnnotationNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.elementValuePairName`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairName?: (ctx: ElementValuePairNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.elementValuePairName`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairName?: (ctx: ElementValuePairNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.typeNamePairs`.
	 * @param ctx the parse tree
	 */
	enterTypeNamePairs?: (ctx: TypeNamePairsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.typeNamePairs`.
	 * @param ctx the parse tree
	 */
	exitTypeNamePairs?: (ctx: TypeNamePairsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.typeNamePair`.
	 * @param ctx the parse tree
	 */
	enterTypeNamePair?: (ctx: TypeNamePairContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.typeNamePair`.
	 * @param ctx the parse tree
	 */
	exitTypeNamePair?: (ctx: TypeNamePairContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.variableNames`.
	 * @param ctx the parse tree
	 */
	enterVariableNames?: (ctx: VariableNamesContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.variableNames`.
	 * @param ctx the parse tree
	 */
	exitVariableNames?: (ctx: VariableNamesContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	enterConditionalStatement?: (ctx: ConditionalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	exitConditionalStatement?: (ctx: ConditionalStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	enterIfElseStatement?: (ctx: IfElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	exitIfElseStatement?: (ctx: IfElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	enterYieldStatement?: (ctx: YieldStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	exitYieldStatement?: (ctx: YieldStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.tryCatchStatement`.
	 * @param ctx the parse tree
	 */
	enterTryCatchStatement?: (ctx: TryCatchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.tryCatchStatement`.
	 * @param ctx the parse tree
	 */
	exitTryCatchStatement?: (ctx: TryCatchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.assertStatement`.
	 * @param ctx the parse tree
	 */
	enterAssertStatement?: (ctx: AssertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.assertStatement`.
	 * @param ctx the parse tree
	 */
	exitAssertStatement?: (ctx: AssertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.catchType`.
	 * @param ctx the parse tree
	 */
	enterCatchType?: (ctx: CatchTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.catchType`.
	 * @param ctx the parse tree
	 */
	exitCatchType?: (ctx: CatchTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	exitFinallyBlock?: (ctx: FinallyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.resources`.
	 * @param ctx the parse tree
	 */
	enterResources?: (ctx: ResourcesContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.resources`.
	 * @param ctx the parse tree
	 */
	exitResources?: (ctx: ResourcesContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.resourceList`.
	 * @param ctx the parse tree
	 */
	enterResourceList?: (ctx: ResourceListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.resourceList`.
	 * @param ctx the parse tree
	 */
	exitResourceList?: (ctx: ResourceListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabel?: (ctx: SwitchLabelContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.forControl`.
	 * @param ctx the parse tree
	 */
	enterForControl?: (ctx: ForControlContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.forControl`.
	 * @param ctx the parse tree
	 */
	exitForControl?: (ctx: ForControlContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.classicalForControl`.
	 * @param ctx the parse tree
	 */
	enterClassicalForControl?: (ctx: ClassicalForControlContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.classicalForControl`.
	 * @param ctx the parse tree
	 */
	exitClassicalForControl?: (ctx: ClassicalForControlContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.castParExpression`.
	 * @param ctx the parse tree
	 */
	enterCastParExpression?: (ctx: CastParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.castParExpression`.
	 * @param ctx the parse tree
	 */
	exitCastParExpression?: (ctx: CastParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.parExpression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.parExpression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.expressionInPar`.
	 * @param ctx the parse tree
	 */
	enterExpressionInPar?: (ctx: ExpressionInParContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.expressionInPar`.
	 * @param ctx the parse tree
	 */
	exitExpressionInPar?: (ctx: ExpressionInParContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.expressionListElement`.
	 * @param ctx the parse tree
	 */
	enterExpressionListElement?: (ctx: ExpressionListElementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.expressionListElement`.
	 * @param ctx the parse tree
	 */
	exitExpressionListElement?: (ctx: ExpressionListElementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.enhancedStatementExpression`.
	 * @param ctx the parse tree
	 */
	enterEnhancedStatementExpression?: (ctx: EnhancedStatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.enhancedStatementExpression`.
	 * @param ctx the parse tree
	 */
	exitEnhancedStatementExpression?: (ctx: EnhancedStatementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	enterStatementExpression?: (ctx: StatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	exitStatementExpression?: (ctx: StatementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.switchExpression`.
	 * @param ctx the parse tree
	 */
	enterSwitchExpression?: (ctx: SwitchExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.switchExpression`.
	 * @param ctx the parse tree
	 */
	exitSwitchExpression?: (ctx: SwitchExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.switchBlockStatementExpressionGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementExpressionGroup?: (ctx: SwitchBlockStatementExpressionGroupContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.switchBlockStatementExpressionGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementExpressionGroup?: (ctx: SwitchBlockStatementExpressionGroupContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.switchExpressionLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchExpressionLabel?: (ctx: SwitchExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.switchExpressionLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchExpressionLabel?: (ctx: SwitchExpressionLabelContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.commandExpression`.
	 * @param ctx the parse tree
	 */
	enterCommandExpression?: (ctx: CommandExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.commandExpression`.
	 * @param ctx the parse tree
	 */
	exitCommandExpression?: (ctx: CommandExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.commandArgument`.
	 * @param ctx the parse tree
	 */
	enterCommandArgument?: (ctx: CommandArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.commandArgument`.
	 * @param ctx the parse tree
	 */
	exitCommandArgument?: (ctx: CommandArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.pathExpression`.
	 * @param ctx the parse tree
	 */
	enterPathExpression?: (ctx: PathExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.pathExpression`.
	 * @param ctx the parse tree
	 */
	exitPathExpression?: (ctx: PathExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterPathElement?: (ctx: PathElementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitPathElement?: (ctx: PathElementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.namePart`.
	 * @param ctx the parse tree
	 */
	enterNamePart?: (ctx: NamePartContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.namePart`.
	 * @param ctx the parse tree
	 */
	exitNamePart?: (ctx: NamePartContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.dynamicMemberName`.
	 * @param ctx the parse tree
	 */
	enterDynamicMemberName?: (ctx: DynamicMemberNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.dynamicMemberName`.
	 * @param ctx the parse tree
	 */
	exitDynamicMemberName?: (ctx: DynamicMemberNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.indexPropertyArgs`.
	 * @param ctx the parse tree
	 */
	enterIndexPropertyArgs?: (ctx: IndexPropertyArgsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.indexPropertyArgs`.
	 * @param ctx the parse tree
	 */
	exitIndexPropertyArgs?: (ctx: IndexPropertyArgsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.namedPropertyArgs`.
	 * @param ctx the parse tree
	 */
	enterNamedPropertyArgs?: (ctx: NamedPropertyArgsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.namedPropertyArgs`.
	 * @param ctx the parse tree
	 */
	exitNamedPropertyArgs?: (ctx: NamedPropertyArgsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.mapEntryList`.
	 * @param ctx the parse tree
	 */
	enterMapEntryList?: (ctx: MapEntryListContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.mapEntryList`.
	 * @param ctx the parse tree
	 */
	exitMapEntryList?: (ctx: MapEntryListContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.mapEntry`.
	 * @param ctx the parse tree
	 */
	enterMapEntry?: (ctx: MapEntryContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.mapEntry`.
	 * @param ctx the parse tree
	 */
	exitMapEntry?: (ctx: MapEntryContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.mapEntryLabel`.
	 * @param ctx the parse tree
	 */
	enterMapEntryLabel?: (ctx: MapEntryLabelContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.mapEntryLabel`.
	 * @param ctx the parse tree
	 */
	exitMapEntryLabel?: (ctx: MapEntryLabelContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.creator`.
	 * @param ctx the parse tree
	 */
	enterCreator?: (ctx: CreatorContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.creator`.
	 * @param ctx the parse tree
	 */
	exitCreator?: (ctx: CreatorContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.dim`.
	 * @param ctx the parse tree
	 */
	enterDim?: (ctx: DimContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.dim`.
	 * @param ctx the parse tree
	 */
	exitDim?: (ctx: DimContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.anonymousInnerClassDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnonymousInnerClassDeclaration?: (ctx: AnonymousInnerClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.anonymousInnerClassDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnonymousInnerClassDeclaration?: (ctx: AnonymousInnerClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.createdName`.
	 * @param ctx the parse tree
	 */
	enterCreatedName?: (ctx: CreatedNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.createdName`.
	 * @param ctx the parse tree
	 */
	exitCreatedName?: (ctx: CreatedNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	enterNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	exitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.enhancedArgumentListInPar`.
	 * @param ctx the parse tree
	 */
	enterEnhancedArgumentListInPar?: (ctx: EnhancedArgumentListInParContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.enhancedArgumentListInPar`.
	 * @param ctx the parse tree
	 */
	exitEnhancedArgumentListInPar?: (ctx: EnhancedArgumentListInParContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.enhancedArgumentListElement`.
	 * @param ctx the parse tree
	 */
	enterEnhancedArgumentListElement?: (ctx: EnhancedArgumentListElementContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.enhancedArgumentListElement`.
	 * @param ctx the parse tree
	 */
	exitEnhancedArgumentListElement?: (ctx: EnhancedArgumentListElementContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.className`.
	 * @param ctx the parse tree
	 */
	enterClassName?: (ctx: ClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.className`.
	 * @param ctx the parse tree
	 */
	exitClassName?: (ctx: ClassNameContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.builtInType`.
	 * @param ctx the parse tree
	 */
	enterBuiltInType?: (ctx: BuiltInTypeContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.builtInType`.
	 * @param ctx the parse tree
	 */
	exitBuiltInType?: (ctx: BuiltInTypeContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.keywords`.
	 * @param ctx the parse tree
	 */
	enterKeywords?: (ctx: KeywordsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.keywords`.
	 * @param ctx the parse tree
	 */
	exitKeywords?: (ctx: KeywordsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.rparen`.
	 * @param ctx the parse tree
	 */
	enterRparen?: (ctx: RparenContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.rparen`.
	 * @param ctx the parse tree
	 */
	exitRparen?: (ctx: RparenContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.nls`.
	 * @param ctx the parse tree
	 */
	enterNls?: (ctx: NlsContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.nls`.
	 * @param ctx the parse tree
	 */
	exitNls?: (ctx: NlsContext) => void;

	/**
	 * Enter a parse tree produced by `NextflowConfigParser.sep`.
	 * @param ctx the parse tree
	 */
	enterSep?: (ctx: SepContext) => void;
	/**
	 * Exit a parse tree produced by `NextflowConfigParser.sep`.
	 * @param ctx the parse tree
	 */
	exitSep?: (ctx: SepContext) => void;
}

